import { Location, Trip, Leg, Profile, JourneysOptions, RefreshJourneyOptions, TripOptions, DeparturesArrivalsOptions, LocationsOptions, StopOptions, ReachableFromOptions, RadarOptions, TripsByNameOptions, RemarksOptions, NearByOptions, PrognosisType, ScheduledDays } from './types'
import { TripSearchRequest, JourneyDetailsRequest, LocDetailsRequest, HimSearchRequest, ReconstructionRequest, StationBoardRequest, LocMatchRequest, LineMatchRequest, LocGeoPosRequest, LocGeoReachRequest, JourneyGeoPosRequest, RawResult, RawIco, RawJny, RawSec, RawOutCon, RawProd, RawLoc, RawPoly, RawOp, RawRem, RawHim, RawStop, Loc, RawSDays } from './types-raw-api'

export type Options = JourneysOptions
	& RefreshJourneyOptions
	& TripOptions
	& DeparturesArrivalsOptions
	& LocationsOptions
	& StopOptions
	& ReachableFromOptions
	& RadarOptions
	& TripsByNameOptions
	& RemarksOptions
	& NearByOptions

export type ProfileEx = DefaultProfile & Profile

// see parseTrip
const checkLegPropertiesMissingInTrip = (t: Required<Trip>): Required<Leg> => {
	const { id, ...t1 } = t;
	return { tripId: id, reachable: undefined, ...t1 };
}

const checkTripPropertiesMissingInLeg = (l: Required<Leg>): Required<Trip> => {
	const { tripId, ...l1 } = l;
	return { id: tripId, scheduledDays: undefined, ...l1 };
}

// initially inferred with 'npx tsc --declaration --emitDeclarationOnly true --noEmit false --allowJs true'

export type Icon = {
	type?: string;
	title?: string;
}

export type CommonData = {
	operators: import("./types").Operator[];
	icons: Icon[];
	lines: import("./types").Line[];
	hints: import("./types").Hint[];
	locations: import("./types").Station[];
	warnings: import("./types").Warning[];
	polylines: import("./types").FeatureCollection[];
}

export interface Context {
	profile: ProfileEx;
	opt?: Options;
	common?: CommonData;
	res?: RawResult;
}

export type DefaultProfile = {
	request: (ctx: Context, userAgent: any, reqData: any) => Promise<{
		res: RawResult;
		common: CommonData;
	}>;
	transformReqBody: (ctx: Context, x: any) => any;
	transformReq: (ctx: Context, x: any) => any;
	salt: any;
	addChecksum: boolean;
	addMicMac: boolean;
	logRequest: (ctx: Context, fetchReq: Request, reqId?: string) => void;
	logResponse: (ctx: Context, res: Response, body: string, reqId?: string) => void;
	formatStationBoardReq: (ctx: Context, station: any, type: any) => {
		meth: string;
		req: StationBoardRequest;
	};
	formatLocationsReq: (ctx: Context, query: any) => {
		cfg: {
			polyEnc: string;
		};
		meth: string;
		req: LocMatchRequest;
	};
	formatStopReq: (ctx: Context, stopRef: Loc) => {
		meth: string;
		req: LocDetailsRequest;
	};
	formatNearbyReq: (ctx: Context, location: any) => {
		cfg: {
			polyEnc: string;
		};
		meth: string;
		req: LocGeoPosRequest;
	};
	formatTripReq: ({ opt }: {
		profile: ProfileEx;
		opt: any;
	}, id: string) => {
		cfg: {
			polyEnc: string;
		};
		meth: string;
		req: JourneyDetailsRequest;
	};
	formatRadarReq: (ctx: Context, north: any, west: any, south: any, east: any) => {
		meth: string;
		req: JourneyGeoPosRequest;
	};
	formatReachableFromReq: (ctx: Context, address: any) => {
		meth: string;
		req: LocGeoReachRequest;
	};
	formatRefreshJourneyReq: (ctx: Context, refreshToken: string) => {
		meth: string;
		req: ReconstructionRequest;
	};
	formatRemarksReq: (ctx: Context) => {
		meth: string;
		req: HimSearchRequest;
	};
	formatLinesReq: (ctx: Context, query: any) => {
		meth: string;
		req: LineMatchRequest;
	};
	transformJourneysQuery: (ctx: { profile?: ProfileEx; opt: import("./types").JourneysOptions }, x: TripSearchRequest) => TripSearchRequest;
	parseDateTime: (ctx: Context, date: string, time: string, tzOffset?: number, timestamp?: boolean) => string | number;
	parsePlatform: (ctx: Context, platfS: any, platfR: any, cncl?: boolean) => {
		platform: any;
		plannedPlatform: any;
		prognosedPlatform: any;
	} | {
		platform: any;
		plannedPlatform: any;
		prognosedPlatform?: undefined;
	};
	parseScheduledDays: (ctx: Context, sDays?: RawSDays) => ScheduledDays | undefined;
	parsePrognosisType: (ctx: Context, progType?: string) => PrognosisType | undefined;
	parseProductsBitmask: (ctx: Context, bitmask: number) => {};
	parseIcon: (ctx: Context, i: RawIco) => Icon;
	parseWhen: (ctx: Context, date: string, timeS: string, timeR: string, tzOffset: number, cncl?: boolean) => {
		when?: string;
		plannedWhen?: string;
		prognosedWhen?: string;
		delay?: number;
	} | {
		when: any;
		plannedWhen: any;
		delay: number;
		prognosedWhen?: undefined;
	};
	parseDeparture: (ctx: Context, d: RawJny) => import("./types").Alternative;
	parseArrival: (ctx: Context, d: RawJny) => import("./types").Alternative;
	parseTrip: (ctx: Context, t: RawJny) => import("./types").Trip;
	parseJourneyLeg: (ctx: Context, pt: RawSec, date: string) => import("./types").Leg;
	parseJourney: (ctx: Context, j: RawOutCon) => import("./types").Journey;
	parseLine: (ctx: Context, p: RawProd) => import("./types").Line;
	parseStationName: (cty: Context, name: any) => any;
	parseLocation: (ctx: Context, l: RawLoc, ...args: any[]) => import("./types").Location | import("./types").Station | import("./types").Stop;
	parseCommon: (ctx: Context) => CommonData;
	parsePolyline: (ctx: Context, p: RawPoly) => import("./types").FeatureCollection;
	parseMovement: (ctx: Context, m: RawJny) => import("./types").Movement;
	parseNearby: (ctx: Context, n: RawLoc) => import("./types").Location | import("./types").Station | import("./types").Stop;
	parseOperator: (ctx: Context, a: RawOp) => {
		type: string;
		id: any;
		name: any;
	};
	parseHint: (ctx: Context, h: RawRem) => import("./types").Hint;
	parseWarning: (ctx: Context, w: RawHim) => import("./types").Warning;
	parseStopover: (ctx: Context, st: RawStop, date: any) => import("./types").StopOver;
	formatAddress: (a: any) => Loc;
	formatCoord: (x: any) => number;
	formatDate: (profile: any, when: any) => string;
	formatLocationFilter: (stops: any, addresses: any, poi: any) => string;
	formatProductsFilter: (ctx: Context, filter: any) => {
		type: string;
		mode: string;
		value: string;
	};
	formatPoi: (p: any) => {
		type: string;
		name: any;
		lid: string;
	};
	formatStation: (id: string) => Loc;
	formatTime: (profile: any, when: any) => string;
	formatLocation: (profile: ProfileEx, l: any, name?: string) => Loc;
	formatRectangle: (profile: ProfileEx, north: any, west: any, south: any, east: any) => {
		llCrd: {
			x: any;
			y: any;
		};
		urCrd: {
			x: any;
			y: any;
		};
	};
	filters: {
		bike: {
			type: string;
			mode: string;
		};
		accessibility: {
			none: {
				type: string;
				mode: string;
				meta: string;
			};
			partial: {
				type: string;
				mode: string;
				meta: string;
			};
			complete: {
				type: string;
				mode: string;
				meta: string;
			};
		};
	};
	journeysOutFrwd: boolean;
	departuresGetPasslist: boolean;
	departuresStbFltrEquiv: boolean;
	trip: boolean;
	radar: boolean;
	refreshJourney: boolean;
	refreshJourneyUseOutReconL: boolean;
	tripsByName: boolean;
	remarks: boolean;
	lines: boolean;
	defaultLanguage?: string;
};

export interface TicketExtraData {
	addData?: string;
	addDataTicketDetails?: string;
	addDataTravelInfo?: string;
	firstClass?: boolean;
	addDataTicketInfo?: string;
}

export type Parsed<T> = {parsed: T;}
export type OldParse<TArg, TReturn> = (ctx: Context, arg: TArg, ...args: any[]) => TReturn
export type NewParse<TArg, TReturn> = (ctx: Context & Parsed<TReturn>, arg: TArg, ...args: any[]) => TReturn

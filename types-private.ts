import { createClient } from './types'
import { raw } from './types-raw-api'

export namespace createClientEx {

    export type Options = createClient.JourneysOptions
        & createClient.RefreshJourneyOptions
        & createClient.TripOptions
        & createClient.DeparturesArrivalsOptions
        & createClient.LocationsOptions
        & createClient.StopOptions
        & createClient.ReachableFromOptions
        & createClient.RadarOptions
        & createClient.TripsByNameOptions
        & createClient.RemarksOptions
        & createClient.NearByOptions

    export type ProfileEx = DefaultProfile & createClient.Profile

    // initially inferred with 'npx tsc --emitDeclarationOnly true --noEmit false'

    export type Icon = {
        type?: string;
        title?: string;
    }

    export type CommonData = {
        operators: import("./types").createClient.Operator[];
        icons: Icon[];
        lines: import("./types").createClient.Line[];
        hints: import("./types").createClient.Hint[];
        locations: import("./types").createClient.Station[];
        warnings: import("./types").createClient.Warning[];
        polylines: import("./types").createClient.FeatureCollection[];
    }

    export interface Context {
        profile: ProfileEx;
        opt?: Options;
        common?: CommonData;
        res?: raw.RawResult;
    }

    export type DefaultProfile = {
        request: (ctx: Context, userAgent: any, reqData: any) => Promise<{
            res: raw.RawResult;
            common: CommonData;
        }>;
        transformReqBody: (ctx: Context, x: any) => any;
        transformReq: (ctx: Context, x: any) => any;
        salt: any;
        addChecksum: boolean;
        addMicMac: boolean;
        formatStationBoardReq: (ctx: Context, station: any, type: any) => {
            meth: string;
            req: {
                type: any;
                date: any;
                time: any;
                stbLoc: any;
                dirLoc: any;
                jnyFltrL: any[];
                dur: any;
            };
        };
        formatLocationsReq: (ctx: Context, query: any) => {
            cfg: {
                polyEnc: string;
            };
            meth: string;
            req: {
                input: {
                    loc: {
                        type: any;
                        name: any;
                    };
                    maxLoc: any;
                    field: string;
                };
            };
        };
        formatStopReq: (ctx: Context, stopRef: any) => {
            meth: string;
            req: {
                locL: any[];
            };
        };
        formatNearbyReq: (ctx: Context, location: any) => {
            cfg: {
                polyEnc: string;
            };
            meth: string;
            req: {
                ring: {
                    cCrd: {
                        x: any;
                        y: any;
                    };
                    maxDist: any;
                    minDist: number;
                };
                locFltrL: any[];
                getPOIs: boolean;
                getStops: boolean;
                maxLoc: any;
            };
        };
        formatTripReq: ({ opt }: {
            opt: any;
        }, id: any, lineName: any) => {
            cfg: {
                polyEnc: string;
            };
            meth: string;
            req: {
                jid: any;
                name: any;
                getPolyline: boolean;
            };
        };
        formatRadarReq: (ctx: Context, north: any, west: any, south: any, east: any) => {
            meth: string;
            req: {
                maxJny: any;
                onlyRT: boolean;
                date: any;
                time: any;
                rect: any;
                perSize: number;
                perStep: number;
                ageOfReport: boolean;
                jnyFltrL: any[];
                trainPosMode: string;
            };
        };
        formatReachableFromReq: (ctx: Context, address: any) => {
            meth: string;
            req: {
                loc: any;
                maxDur: any;
                maxChg: any;
                date: any;
                time: any;
                period: number;
                jnyFltrL: any[];
            };
        };
        formatRefreshJourneyReq: (ctx: Context, refreshToken: any) => {
            meth: string;
            req: {
                getIST: boolean;
                getPasslist: boolean;
                getPolyline: boolean;
                getTariff: boolean;
            };
        };
        formatRemarksReq: (ctx: Context) => {
            meth: string;
            req: {
                himFltrL: {
                    type: string;
                    mode: string;
                    value: string;
                }[];
            };
        };
        formatLinesReq: (ctx: Context, query: any) => {
            meth: string;
            req: {
                input: any;
            };
        };
        transformJourneysQuery: (ctx: { profile?: ProfileEx; opt: any }, x: any) => any;
        parseDateTime: (ctx:Context, date: string, time: string, tzOffset?: number, timestamp?: boolean) => string | number;
        parsePlatform: (ctx: Context, platfS: any, platfR: any, cncl?: boolean) => {
            platform: any;
            plannedPlatform: any;
            prognosedPlatform: any;
        } | {
            platform: any;
            plannedPlatform: any;
            prognosedPlatform?: undefined;
        };
        parseProductsBitmask: (ctx: Context, bitmask: number) => {};
        parseIcon: (ctx: Context, i: raw.RawIco) => Icon;
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
        parseDeparture: (ctx: Context, d: raw.RawJny) => import("./types").createClient.Alternative;
        parseArrival: (ctx: Context, d: raw.RawJny) => import("./types").createClient.Alternative;
        parseTrip: (ctx: Context, t: raw.RawJny) => import("./types").createClient.Trip;
        parseJourneyLeg: (ctx: Context, pt: raw.RawSec, date: string) => import("./types").createClient.Leg;
        parseJourney: (ctx: Context, j: raw.RawOutCon) => import("./types").createClient.Journey;
        parseLine: (ctx: Context, p: raw.RawProd) => import("./types").createClient.Line;
        parseStationName: (cty: Context, name: any) => any;
        parseLocation: (ctx: Context, l: raw.RawLoc, ...args: any[]) => import("./types").createClient.Location | import("./types").createClient.Station | import("./types").createClient.Stop;
        parseCommon: (ctx: Context) => CommonData;
        parsePolyline: (ctx: Context, p: raw.RawPoly) => import("./types").createClient.FeatureCollection;
        parseMovement: (ctx: Context, m: raw.RawJny) => import("./types").createClient.Movement;
        parseNearby: (ctx: Context, n: raw.RawLoc) => import("./types").createClient.Location | import("./types").createClient.Station | import("./types").createClient.Stop;
        parseOperator: (ctx: Context, a: raw.RawOp) => {
            type: string;
            id: any;
            name: any;
        };
        parseHint: (ctx: Context, h: raw.RawRem) => import("./types").createClient.Hint;
        parseWarning: (ctx: Context, w: raw.RawHim) => import("./types").createClient.Warning;
        parseStopover: (ctx: Context, st: raw.RawStop, date: any) => import("./types").createClient.StopOver;
        formatAddress: (a: any) => {
            type: string;
            name: any;
            lid: string;
        };
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
        formatStation: (id: any) => {
            type: string;
            lid: string;
        };
        formatTime: (profile: any, when: any) => string;
        formatLocation: (profile: ProfileEx, l: any, name?: string) => {
            type: string;
            lid: string;
        };
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
}

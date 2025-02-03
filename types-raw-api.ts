import { Stop, Line, Hint, Warning, FeatureCollection } from './types'

/// raw hafas interface

export interface RawPltf {
	type?: string;
	txt: string;
}

export interface RawTrnCmpSX {
	tcM?: number;
	tcocX?: number[];
}

export interface RawDep {
	locX?: number;
	idx?: number;
	dProdX?: number;
	dPlatfS?: string;
	dInR?: boolean;
	dTimeS?: string;
	dProgType?: string;
	dTrnCmpSX?: RawTrnCmpSX;
	dTZOffset?: number;
	msgL?: RawMsg[];
	type?: string;
	dTimeR?: string;
	dCncl?: boolean;
	dPltfS?: RawPltf;
	dPlatfR?: string;
	dPltfR?: RawPltf;
	dPlatfCh?: boolean;
	location?: Stop; // generated in parse/common.js
}

export interface RawArr {
	locX?: number;
	idx?: number;
	aPlatfS?: string;
	aOutR?: boolean;
	aTimeS?: string;
	aProgType?: string;
	aTrnCmpSX?: any;
	aTZOffset?: number;
	msgL?: RawMsg[];
	type?: string;
	aTimeR?: string;
	aCncl?: boolean;
	aPltfS?: RawPltf;
	aPlatfR?: string;
	aPltfR?: RawPltf;
	aProdX?: any;
	prodL?: RawProd[];
	location?: Stop; // generated in parse/common.js
}

export interface PubCh {
	name: string;
	fDate: string;
	fTime: string;
	tDate: string;
	tTime: string;
}

export interface RawHim {
	hid: string;
	act: boolean;
	pub?: string;
	head?: string;
	lead?: string;
	text?: string;
	tckr?: string;
	icoX: number;
	prio: number;
	fLocX?: number;
	tLocX?: number;
	prod?: number;
	lModDate?: string;
	lModTime?: string;
	sDate?: string;
	sTime?: string;
	eDate?: string;
	eTime?: string;
	cat?: number;
	pubChL?: PubCh[];
	edgeRefL?: number[];
	regionRefL?: number[];
	catRefL?: number[];
	eventRefL?: number[];
	affProdRefL?: number[];
	fromLocations?: Stop[];  // generated in parse/common.js
	icon?: any;
	comp?: string;
	toLocations?: Stop[];  // generated in parse/common.js
}

export interface RawMsg {
	type: string;
	remX?: number;
	sty?: string;
	txtC?: RawRGB;
	fLocX?: number;
	tLocX?: number;
	fIdx?: number;
	tIdx?: number;
	himX?: number;
	tagL?: string[];
	sort?: any;
	prio?: any;
	hint?: Hint; // generated in parse/common.js
	warning?: Warning; // generated in parse/common.js
}

export interface RawRem {
	type: string;
	code: string;
	prio?: number;
	icoX?: number;
	txtN?: string;
	txtS?: string;
	jid?: string;
	icon?: any;
	sIdx?: any;
}

export interface RawStop {
	locX?: number;
	idx?: number;
	dProdX?: number;
	dInR?: boolean;
	dTimeS?: string;
	dTimeR?: string;
	dTZOffset?: number;
	dCncl?: boolean;
	dInS?: boolean;
	dPlatfS?: string;
	dPltfS?: RawPltf;
	dPlatfR?: string;
	dPltfR?: RawPltf;
	dPlatfCh?: boolean;
	dProgType?: string;
	dDirTxt?: string;
	dDirFlg?: string;
	dTrnCmpSX?: RawTrnCmpSX;
	aProdX?: number;
	aPlatfS?: string;
	aPltfS?: RawPltf;
	aPlatfR?: string;
	aPltfR?: RawPltf;
	aOutR?: boolean;
	aTimeS?: string;
	aTimeR?: string;
	aTZOffset?: number;
	aCncl?: boolean;
	aOutS?: boolean;
	aPlatfCh?: boolean;
	aProgType?: string;
	type?: string;
	msgL?: RawMsg[];
	remL?: RawRem[];
	isAdd?: boolean;
	location?: Stop; // generated in parse/common.js
}

export interface PpLocRef {
	ppIdx: number;
	locX: number;
	location?: Stop; // generated in parse/common.js
}

export interface RawPoly {
	delta: boolean;
	dim: number;
	type?: string;
	crdEncYX: string;
	crdEncZ?: string;
	crdEncS: string;
	crdEncF: string;
	ppLocRefL?: PpLocRef[];
}

export interface PolyG {
	polyXL: number[];
}

export interface RawAni {
	mSec: number[];
	proc: number[];
	procAbs?: number[];
	fLocX: number[];
	tLocX: number[];
	dirGeo: number[];
	stcOutputX: number[];
	polyG?: PolyG;
	state: string[];
	poly?: RawPoly;
	polyline?: FeatureCollection;  // generated in parse/common.js
	fromLocations?: Stop[];  // generated in parse/common.js
	toLocations?: Stop[];  // generated in parse/common.js
}

export interface RawSDays {
	fLocX?: number;
	tLocX?: number;
	fLocIdx?: number;
	tLocIdx?: number;
	sDaysR?: string;
	sDaysI?: string;
	sDaysB?: string;
}

export interface RawPolyG {
	polyXL: number[];
}

export interface RawCrd {
	x: number;
	y: number;
	z?: number;
	type?: any;
	layerX?: any;
	crdSysX?: any;
	floor?: number;
}

export interface RawFreq {
	jnyL?: RawJny[];
	minC?: number;
	maxC?: number;
	numC?: number;
}

export interface RawJny {
	jid: string;
	prodX: number;
	dirTxt?: string;
	status?: string;
	isRchbl?: boolean;
	ctxRecon?: string;
	remL?: RawRem[];
	msgL?: RawMsg[];
	stbStop?: RawStop;
	subscr?: string;
	poly?: RawPoly;
	stopL?: RawStop[];
	date?: string;
	sDaysL?: RawSDays[];
	dTrnCmpSX?: RawTrnCmpSX;
	polyG?: RawPolyG;
	ani?: RawAni;
	pos?: RawCrd;
	freq?: RawFreq;
	polyline?: any;
	dirFlg?: any;
	prodL?: RawProdRef[];
	dirL?: RawDirRef[];
	sumLDrawStyleX?: number;
	resLDrawStyleX?: number;
	trainStartDate?: string;
	durS?: string;
	tcocXL?: any;
	chRatingSoll?: any;
	chgDurR?: any;
	approxDelay?: any;
	isPartCncl?: any;
	line?: Line; // generated in parse/common.js
}

export interface RawGis {
	dist?: number;
	durS?: string;
	dirGeo?: number;
	ctx?: string;
	gisPrvr?: string;
	getDescr?: boolean;
	getPoly?: boolean;
	msgL?: RawMsg[];
}

export interface RawSec {
	type: string;
	icoX?: number;
	dep: RawDep;
	arr: RawArr;
	jny?: RawJny;
	parJnyL?: RawJny[];
	resState?: string;
	resRecommendation?: string;
	gis?: RawGis;
	minChg?: any;
}

export interface RawSotCtxt {
	cnLocX?: number;
	calcDate: string;
	jid?: string;
	locMode: string;
	pLocX?: number;
	reqMode: string;
	sectX?: number;
	calcTime: string;
	tName?: string;
}

export interface Content {
	type: string;
	content: string;
}

export interface ExtCont {
	content: Content;
}

export interface RawPrice {
	amount: number;
}

export interface RawTicket {
	name: string;
	prc: number;
	cur: string;
	extCont: ExtCont;
	price?: RawPrice;
	addData?: string;
}

export interface RawFare {
	price?: RawPrice;
	prc?: any;
	desc?: string;
	isFromPrice?: boolean;
	isPartPrice?: boolean;
	retPriceIsCompletePrice?: boolean;
	retPrice?: number;
	isBookable?: boolean;
	isUpsell?: boolean;
	verbundName?: string;
	targetCtx?: string;
	buttonText?: string;
	name?: string;
	ticketL?: RawTicket[];
	addData?: string;
}

export interface RawFareSet {
	desc?: string;
	fareL: RawFare[];
	addData?: string;
}

export interface RawTrfRes {
	statusCode?: string;
	fareSetL?: RawFareSet[];
}

export interface RawRecon {
	ctx?: string;
}

export interface RawOutCon {
	cid: string;
	date: string;
	dur: string;
	durS?: string;
	durR?: string;
	chg: number;
	sDays?: RawSDays;
	dep: RawDep;
	arr: RawArr;
	secL: RawSec[];
	ctxRecon?: string;
	trfRes?: RawTrfRes;
	conSubscr: string;
	resState?: string;
	resRecommendation?: string;
	recState: string;
	sotRating?: number;
	isSotCon?: boolean;
	showARSLink?: boolean;
	sotCtxt?: RawSotCtxt;
	cksum: string;
	msgL?: RawMsg[];
	recon?: RawRecon;
	dTrnCmpSX?: any;
	intvlSubscr?: string;
	tcocXL?: any;
	originType?: string;
	freq?: RawFreq;
	cksumDti?: any;
	q?: any;
}

export interface RawItem {
	col: number;
	row: number;
	msgL?: RawMsg[];
	remL?: number[];
	remarkRefs?: any[]; // generated in parse/common.js
	hints?: Hint[]; // generated in parse/common.js
}

export interface RawGrid {
	nCols: number;
	nRows: number;
	itemL: RawItem[];
	type: string;
	title: string;
}
export interface RawLoc {
	lid?: string;
	type?: string;
	name: string;
	icoX?: number;
	extId?: string;
	state: string;
	crd?: RawCrd;
	pCls?: number;
	entry?: boolean;
	mMastLocX?: number;
	pRefL?: number[];
	wt?: number;
	entryLocL?: number[];
	stopLocL?: number[];
	msgL?: RawMsg[];
	gridL?: RawGrid[];
	isMainMast?: boolean;
	meta?: boolean;
	dist?: number;
	dur?: number;
	gidL?: string[];
	lines?: Line[]; // generated in parse/common.js
	remarkRefs?: any[]; // generated in parse/common.js
	hints?: Hint[]; // generated in parse/common.js
}

export interface RawProdCtx {
	name?: string;
	num?: string;
	matchId?: string;
	catOut?: string;
	catOutS?: string;
	catOutL?: string;
	catIn?: string;
	catCode?: string;
	admin?: string;
	addName?: string;
	lineId?: string;
	line?: any;
}

export interface RawOp {
	name: string;
	icoX: number;
}

export interface RawProd {
	name?: string;
	number?: string;
	icoX?: number;
	oprX?: number;
	prodCtx?: RawProdCtx;
	cls?: number;
	line?: string;
	addName?: string;
	operator?: any;
	pid?: any;
	nameS?: any;
	himIdL?: any;
}

export interface RawProdRef {
	fLocX?: number;
	tLocX?: number;
	prodX: number;
	fIdx?: number;
	tIdx?: number;
}

export interface RawRGB {
	r: number;
	g: number;
	b: number;
}

export interface RawIco {
	res?: string;
	txt?: string;
	text?: string;
	txtS?: string;
	fg?: RawRGB;
	bg?: RawRGB;
	shp?: any;
}

export interface RawDir {
	txt: string;
	flg?: string;
}

export interface RawDirRef {
	dirX?: number;
	fLocX?: number;
	tLocX?: number;
	fIdx?: number;
	tIdx?: number;
}

export interface RawTcoc {
	c: string;
	r?: number;
}

export interface RawHimMsgCat {
	id: number;
}

export interface IcoCrd {
	x: number;
	y: number;
	type?: string;
}

export interface RawHimMsgEdge {
	fLocX?: number;
	tLocX?: number;
	dir?: number;
	icoCrd: IcoCrd;
	msgRefL?: number[];
	icoX?: number;
}

export interface RawHimMsgEvent {
	fLocX?: number;
	tLocX?: number;
	fDate: string;
	fTime: string;
	tDate: string;
	tTime: string;
}

export interface RawCommon {
	locL?: RawLoc[];
	prodL?: RawProd[];
	remL?: RawRem[];
	icoL?: RawIco[];
	opL?: RawOp[];
	maxC?: number;
	numC?: number;
	himL?: RawHim[];
	polyL?: RawPoly[];
	layerL?: any;
	crdSysL?: any;
	dirL?: RawDir[];
	lDrawStyleL?: any[];
	tcocL?: RawTcoc[];
	himMsgCatL?: RawHimMsgCat[];
	himMsgEdgeL?: RawHimMsgEdge[];
	himMsgEventL?: RawHimMsgEvent[];
	rtSrcL?: any;
}

export interface RawMatch {
	field?: string;
	state?: string;
	locL?: RawLoc[];
}

export interface RawPos {
	locX: number;
	dur: number;
}

export interface RawLine {
	lineId?: string;
	prodX: number;
	dirRefL?: number[];
	jnyL?: RawJny[];
	line?: Line; // generated in parse/common.js
}

export interface RawResult {
	common?: RawCommon;
	msgL?: RawHim[];
	type?: string;
	jnyL?: RawJny[];
	outConL?: RawOutCon[];
	outCtxScrB?: string;
	outCtxScrF?: string;
	planrtTS?: string;
	outConGrpSettings?: any;
	match?: RawMatch;
	locL?: RawLoc[];
	journey?: RawJny;
	hciVersion?: string;
	fpE?: string;
	sD?: string;
	sT?: string;
	fpB?: string;
	posL?: RawPos[];
	lineL?: RawLine[];
	retCtxScrF?: any;
	bfATS?: any;
	bfIOSTS?: any;
	outConGrpL?: any;
}

export interface SvcRes {
	meth: string;
	err?: string;
	errTxt?: string;
	res?: RawResult;
}

export interface RawResponse {
	ver: string;
	ext?: string;
	lang: string;
	id?: string;
	err?: string;
	cInfo?: any;
	graph?: any;
	subGraph?: any;
	view?: any;
	errTxt?: string;
	svcResL?: SvcRes[];
}

export interface Cfg {
	polyEnc?: string;
	rtMode?: string;
}

export interface Loc {
	type: string;
	name?: string;
	lid?: string;
}

export interface LocViaInput {
	loc: Loc;
}

export interface LocMatchInput {
	loc: Loc;
	maxLoc: number;
	field: string;
}

export interface LocMatchRequest {
	input: LocMatchInput;
}

export interface LineMatchRequest {
	input: string;
}

export interface JourneyDetailsRequest {
	jid: string;
	getPolyline: boolean;
}

export interface JnyFltr {
	type: string;
	mode: string;
	value?: string;
	meta?: string;
}

export interface TvlrProf {
	type: string;
	redtnCard?: number;
}

export interface TrfReq {
	jnyCl: number;
	tvlrProf: TvlrProf[];
	cType: string;
	rType?: string;
}

export interface StationBoardRequest {
	type: string;
	date: string;
	time: string;
	stbLoc: Loc;
	jnyFltrL: JnyFltr[];
	dur: number;
	dirLoc?: Loc;
	maxJny?: number;
	getPasslist?: any;
	stbFltrEquiv?: any;
}

export interface HimSearchRequest {
	himFltrL: JnyFltr[];
	getPolyline?: boolean;
	maxNum?: number;
	dateB?: string;
	timeB?: string;
	dateE?: string;
	timeE?: string;
}

export interface ReconstructionRequest {
	getIST: boolean;
	getPasslist: boolean;
	getPolyline: boolean;
	getTariff: boolean;
	ctxRecon?: string;
	outReconL?: RawRecon[];
	trfReq?: TrfReq;
}

export interface LocData {
	loc: Loc;
	type: string;
	date: string;
	time: string;
}

export interface SearchOnTripRequest {
	sotMode: string;
	jid: string;
	locData: LocData;
	arrLocL: Loc[];
	jnyFltrL: JnyFltr[];
	getPasslist: boolean;
	getPolyline: boolean;
	minChgTime: number;
	getTariff: boolean;
}

export interface TripSearchRequest {
	getPasslist: boolean;
	maxChg: number;
	minChgTime: number;
	depLocL: Loc[];
	viaLocL?: LocViaInput[];
	arrLocL: Loc[];
	jnyFltrL: JnyFltr[];
	gisFltrL: JnyFltr[];
	getTariff: boolean;
	ushrp: boolean;
	getPT: boolean;
	getIV: boolean;
	getPolyline: boolean;
	outDate?: string;
	outTime?: string;
	ctxScr?: string;
	numF?: number;
	outFrwd?: boolean;
	trfReq?: TrfReq;
}

export interface JourneyMatchRequest {
	input: string;
	date?: string;
	time?: string;
	dateB?: string;
	timeB?: string;
	dateE?: string;
	timeE?: string;
	onlyCR?: boolean;
	jnyFltrL: JnyFltr[];
}

export interface RawcCrd {
	x: number;
	y: number;
}

export interface RawRing {
	cCrd: RawcCrd;
	maxDist: number;
	minDist: number;
}

export interface LocGeoPosRequest {
	ring: RawRing;
	locFltrL: JnyFltr[];
	getPOIs: boolean;
	getStops: boolean;
	maxLoc: number;
}

export interface LocGeoReachRequest {
	loc: Loc;
	maxDur: number;
	maxChg: number;
	date: string;
	time: string;
	period: number;
	jnyFltrL: JnyFltr[];
}

export interface LocDetailsRequest {
	locL: Loc[];
}

export interface ServerInfoRequest {
	getVersionInfo: boolean;
}

export interface RawRect {
	llCrd: RawCrd;
	urCrd: RawCrd;
}

export interface JourneyGeoPosRequest {
	maxJny: number;
	onlyRT: boolean;
	date: string;
	time: string;
	rect: RawRect;
	perSize: number;
	perStep: number;
	ageOfReport: boolean;
	jnyFltrL: JnyFltr[];
	trainPosMode: string;
}

export interface SvcReq {
	cfg: Cfg;
	meth: string;
	req: LocMatchRequest | TripSearchRequest | JourneyDetailsRequest | StationBoardRequest | ReconstructionRequest | JourneyMatchRequest | LocGeoPosRequest | LocGeoReachRequest | LocDetailsRequest | JourneyGeoPosRequest | HimSearchRequest | LineMatchRequest | ServerInfoRequest | SearchOnTripRequest;
}

export interface RawRequestClient {
	id: string;
	v: string;
	type: string;
	name: string;
}

export interface RawRequestAuth {
	type: string;
	aid: string;
}

export interface RawRequest {
	lang: string;
	svcReqL: SvcReq[];
	client: RawRequestClient;
	ext?: string;
	ver: string;
	auth: RawRequestAuth;
}


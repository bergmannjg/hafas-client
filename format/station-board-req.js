/**
 * @import {DefaultProfile} from "../types-private"
 */

/** @type {DefaultProfile["formatStationBoardReq"]} */
const formatStationBoardReq = (ctx, station, type) => {
	const {profile, opt} = ctx;

	const jnyFltrL = [
		profile.formatProductsFilter(ctx, opt.products || {}),
	];
	if (opt.line !== null) {
		jnyFltrL.push({type: 'LINEID', mode: 'INC', value: opt.line});
	}

	/** @type {import("../types-raw-api").StationBoardRequest} */
	const req = {
		type,
		date: profile.formatDate(profile, opt.when),
		time: profile.formatTime(profile, opt.when),
		stbLoc: station,
		dirLoc: opt.direction
			? profile.formatStation(opt.direction)
			: undefined,
		jnyFltrL,
		dur: opt.duration,
	};
	if (opt.results !== null) {
		req.maxJny = opt.results === Infinity
			? 10000
			: opt.results;
	}
	if (profile.departuresGetPasslist) {
		req.getPasslist = Boolean(opt.stopovers);
	}
	if (profile.departuresStbFltrEquiv) {
		req.stbFltrEquiv = !opt.includeRelatedStations;
	}

	return {
		meth: 'StationBoard',
		req,
	};
};

export {
	formatStationBoardReq,
};

/**
 * @import {DefaultProfile} from "../types-private"
 */

/** @type {DefaultProfile["formatRefreshJourneyReq"]} */
const formatRefreshJourneyReq = (ctx, refreshToken) => {
	const {profile, opt} = ctx;

	/** @type {import("../types-raw-api").ReconstructionRequest} */
	const req = {
		getIST: true, // todo: make an option
		getPasslist: Boolean(opt.stopovers),
		getPolyline: Boolean(opt.polylines),
		getTariff: Boolean(opt.tickets),
	};
	if (profile.refreshJourneyUseOutReconL) {
		req.outReconL = [{ctx: refreshToken}];
	} else {
		req.ctxRecon = refreshToken;
	}

	return {
		meth: 'Reconstruction',
		req,
	};
};

export {
	formatRefreshJourneyReq,
};

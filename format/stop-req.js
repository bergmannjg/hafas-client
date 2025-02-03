/**
 * @import {DefaultProfile} from "../types-private"
 */

/** @type {DefaultProfile["formatStopReq"]} */
const formatStopReq = (ctx, stopRef) => {
	return {
		// todo: there's also `StationDetails`, are there differences?
		meth: 'LocDetails',
		req: {
			locL: [stopRef],
		},
	};
};

export {
	formatStopReq,
};

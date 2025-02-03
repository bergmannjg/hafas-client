/**
 * @import {DefaultProfile} from "../types-private"
 */

/** @type {DefaultProfile["formatLinesReq"]} */
const formatLinesReq = (ctx, query) => {
	return {
		meth: 'LineMatch',
		req: {
			input: query,
		},
	};
};

export {
	formatLinesReq,
};

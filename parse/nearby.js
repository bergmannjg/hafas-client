/**
 * @import {DefaultProfile} from "../types-private"
 */

// todo: remarks
// todo: lines
// todo: what is s.pCls?
// todo: what is s.wt?
// todo: what is s.dur?

/** @type {DefaultProfile["parseNearby"]} */
const parseNearby = (ctx, n) => { // n = raw nearby location
	const res = ctx.profile.parseLocation(ctx, n);
	res.distance = n.dist;
	return res;
};

export {
	parseNearby,
};

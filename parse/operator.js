import slugg from 'slugg';

/**
 * @import {DefaultProfile} from "../types-private"
 */

/** @type {DefaultProfile["parseOperator"]} */
const parseOperator = (ctx, a) => {
	const name = a.name && a.name.trim();
	if (!name) {
		return null;
	}
	return {
		type: 'operator',
		id: slugg(a.name), // todo: find a more reliable way
		name,
	};
};

export {
	parseOperator,
};

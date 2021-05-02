'use strict'

/**
 * @typedef {import("../types-private").createClientEx.DefaultProfile} DefaultProfile
 */

/** @type {DefaultProfile["formatLinesReq"]} */
const formatLinesReq = (ctx, query) => {
	return {
		meth: 'LineMatch',
		req: {
			input: query,
		}
	}
}

module.exports = formatLinesReq

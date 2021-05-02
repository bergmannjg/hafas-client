'use strict'

/**
 * @typedef {import("../types-private").createClientEx.DefaultProfile} DefaultProfile
 */

/** @type {DefaultProfile["formatStopReq"]} */
const formatStopReq = (ctx, stopRef) => {
	return {
		meth: 'LocDetails',
		req: {
			locL: [stopRef]
		}
	}
}

module.exports = formatStopReq

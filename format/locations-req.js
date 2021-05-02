'use strict'

/**
 * @typedef {import("../types-private").createClientEx.ProfileEx} ProfileEx
 * @typedef {import("../types-private").createClientEx.DefaultProfile} DefaultProfile
 */

/** @type {DefaultProfile["formatLocationsReq"]} */
const formatLocationsReq = (ctx, query) => {
	const {profile, opt} = ctx

	return {
		cfg: {polyEnc: 'GPA'},
		meth: 'LocMatch',
		req: {input: {
			loc: {
				type: profile.formatLocationFilter(opt.stops, opt.addresses, opt.poi),
				name: opt.fuzzy ? query + '?' : query
			},
			maxLoc: opt.results,
			field: 'S' // todo: what is this?
		}}
	}
}

module.exports = formatLocationsReq

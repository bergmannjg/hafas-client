'use strict'

/**
 * @typedef {import("../../types-private").createClientEx.ProfileEx} ProfileEx
 */
const baseProfile = require('./base.json')
const products = require('./products')

/** @type {Partial<ProfileEx>} */
const sbbProfile = {
	...baseProfile,
	locale: 'de-CH',
	timezone: 'Europe/Zurich',

	products: products,

	departuresGetPasslist: false,
	departuresStbFltrEquiv: false,
	refreshJourneyUseOutReconL: true,
	trip: true,
	radar: true,
	reachableFrom: true,
}

const withLocale = (locale) => ({...sbbProfile, locale});

/** @type{any} */(sbbProfile).withLocale = withLocale
module.exports = sbbProfile

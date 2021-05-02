'use strict'

/**
 * @typedef {import("../types").createClient.Leg} Leg
 * @typedef {import("../types").createClient.Trip} Trip
 * @typedef {import("../types-private").createClientEx.ProfileEx} ProfileEx
 * @typedef {import("../types-private").createClientEx.DefaultProfile} DefaultProfile
 * @typedef {import("../types-raw-api").raw.RawSec} RawLeg
*/

const minBy = require('lodash/minBy')
const maxBy = require('lodash/maxBy')
const last = require('lodash/last')

/** @type {DefaultProfile["parseTrip"]} */
const parseTrip = (ctx, t) => { // t = raw trip
	const {profile} = ctx

	// pretend the trip is a leg in a journey
	/** @type RawLeg */
	const fakeLeg = {
		type: 'JNY',
		dep: minBy(t.stopL, 'idx') || t.stopL[0],
		arr: maxBy(t.stopL, 'idx') || last(/** @type any[] */(t.stopL)),
		jny: t,
	}

	// todo: this breaks if the trip starts on a different day
	// how does HAFAS do this?
	const today = () => profile.formatDate(profile, Date.now())
	const date = t.date || today()

	/** @type {any} */
	const trip = profile.parseJourneyLeg(ctx, fakeLeg, date)
	trip.id = trip.tripId
	delete trip.tripId

	return /** @type {Trip} */(trip)
}

module.exports = parseTrip

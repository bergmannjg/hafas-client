'use strict'

/**
 * @typedef {import("../types-private").createClientEx.DefaultProfile} DefaultProfile
 */

const slugg = require('slugg')

/** @type {DefaultProfile["parseOperator"]} */
const parseOperator = (ctx, a) => {
	const name = a.name && a.name.trim()
	if (!name) return null
	return {
		type: 'operator',
		id: slugg(a.name), // todo: find a more reliable way
		name
	}
}

module.exports = parseOperator

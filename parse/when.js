/**
 * @import {DefaultProfile} from "../types-private"
 */

/** @type {DefaultProfile["parseWhen"]} */
const parseWhen = (ctx, date, timeS, timeR, tzOffset, cncl = false) => {
	const parse = ctx.profile.parseDateTime;

	let planned = timeS
		? /** @type {string} */(parse(ctx, date, timeS, tzOffset, false)) // eslint-disable-line @stylistic/no-extra-parens
		: null;
	let prognosed = timeR
		? /** @type {string} */(parse(ctx, date, timeR, tzOffset, false)) // eslint-disable-line @stylistic/no-extra-parens
		: null;
	let delay = null;

	if (planned && prognosed) {
		const tPlanned = parse(ctx, date, timeS, tzOffset, true);
		const tPrognosed = parse(ctx, date, timeR, tzOffset, true);
		delay = Math.round((/** @type {number} */(tPrognosed) - /** @type {number} */(tPlanned)) / 1000); // eslint-disable-line @stylistic/no-extra-parens
	}

	if (cncl) {
		return {
			when: null,
			plannedWhen: planned,
			prognosedWhen: prognosed,
			delay,
		};
	}
	return {
		when: prognosed || planned,
		plannedWhen: planned,
		delay,
	};
};

export {
	parseWhen,
};

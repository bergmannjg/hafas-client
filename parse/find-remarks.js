import flatMap from 'lodash/flatMap.js';

/**
 * @import {Warning, Hint} from "../types"
 * @import {RawMsg} from "../types-raw-api"
 */

// There are two kinds of notes: "remarks" (in `remL`) and HAFAS
// Information Manager (HIM) notes (in `himL`). The former describe
// the regular operating situation, e.g. "bicycles allows", whereas
// the latter describe cancellations, construction work, etc.

// hafas-client's naming scheme:
// - hints: notes from `remL` for regular operation
// - warnings: notes from `himL` for cancellations, construction, etc
// - remarks: both "notes" and "warnings"

/**
 * @param {Array<RawMsg>} refs
 */
const findRemarks = (refs) => {
	return flatMap(refs, (ref) => {
		return [ref.warning, ref.hint]
			.filter(rem => Boolean(rem))
			.map(rem => /** @type {[Warning|Hint,{fromLocation?:any, toLocation?:any}]} */([rem, ref])); // eslint-disable-line @stylistic/no-extra-parens
	});
};

export {
	findRemarks,
};

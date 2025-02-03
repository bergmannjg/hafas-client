/**
 * @import {AgeGroup} from "../../types"
 */

const ageGroup = {
	BABY: /** @type {AgeGroup} */('B'), // eslint-disable-line @stylistic/no-extra-parens
	CHILD: /** @type {AgeGroup} */('K'), // eslint-disable-line @stylistic/no-extra-parens
	YOUNG: /** @type {AgeGroup} */('Y'), // eslint-disable-line @stylistic/no-extra-parens
	ADULT: /** @type {AgeGroup} */('E'), // eslint-disable-line @stylistic/no-extra-parens
	SENIOR: /** @type {AgeGroup} */('S'), // eslint-disable-line @stylistic/no-extra-parens
	upperBoundOf: {
		BABY: 6,
		CHILD: 15,
		YOUNG: 27,
		ADULT: 65,
		SENIOR: Infinity,
	},
};

/**
 * @param {number} age
 * @returns {AgeGroup}
 */
const ageGroupFromAge = (age) => {
	const {upperBoundOf} = ageGroup;
	if (age < upperBoundOf.BABY) {
		return ageGroup.BABY;
	}
	if (age < upperBoundOf.CHILD) {
		return ageGroup.CHILD;
	}
	if (age < upperBoundOf.YOUNG) {
		return ageGroup.YOUNG;
	}
	if (age < upperBoundOf.ADULT) {
		return ageGroup.ADULT;
	}
	if (age < upperBoundOf.SENIOR) {
		return ageGroup.SENIOR;
	}
	throw new TypeError(`Invalid age '${age}'`);
};

export {
	ageGroup,
	ageGroupFromAge,
};

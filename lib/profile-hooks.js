/**
 * @import {Context, Parsed, OldParse, NewParse} from "../types-private"
 */

// For any type of "thing to parse", there's >=1 parse functions.
// By composing custom parse function(s) with the default ones, one
// can customize the behaviour of hafas-client. Profiles extensively
// use this mechanism.

// Each parse function has the following signature:
// ({opt, profile, common, res}, ...raw) => newParsed

// Compose a new/custom parse function with the old/existing parse
// function, so that the new fn will be called with the output of the
// old fn.

/** @author Jürgen Bergmann , added common arg with type TArg */

/**
 * @template TArg, TReturn
 * @param {OldParse<TArg, TReturn>} oldParse
 * @param {NewParse<TArg, TReturn>} newParse
 * @returns {(ctx: Context, arg: TArg, ...args: any[]) => TReturn}
 */
const parseHook = (oldParse, newParse) => {
	return (ctx, arg, ...args) => {
		return newParse({
			...ctx,
			// eslint-disable-next-line @stylistic/no-extra-parens
			parsed: oldParse(/** @type {Context & Parsed<TReturn>} */({...ctx, parsed: {}}), arg, ...args),
		}, arg, ...args);
	};
};

export {
	parseHook,
};

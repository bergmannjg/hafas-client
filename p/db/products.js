/**
 * @import {ProductType} from "../../types"
 */

// todo: https://gist.github.com/anonymous/d3323a5d2d6e159ed42b12afd0380434#file-haf_products-properties-L1-L95
/** @type {ProductType []} */
const products = [
	{
		id: 'nationalExpress',
		mode: /** @type {'train'} */('train'), // eslint-disable-line @stylistic/no-extra-parens
		bitmasks: [1],
		name: 'InterCityExpress',
		short: 'ICE',
		default: true,
	},
	{
		id: 'national',
		mode: /** @type {'train'} */('train'), // eslint-disable-line @stylistic/no-extra-parens
		bitmasks: [2],
		name: 'InterCity & EuroCity',
		short: 'IC/EC',
		default: true,
	},
	{
		id: 'regionalExpress',
		mode: /** @type {'train'} */('train'), // eslint-disable-line @stylistic/no-extra-parens
		bitmasks: [4],
		name: 'RegionalExpress & InterRegio',
		short: 'RE/IR',
		default: true,
	},
	{
		id: 'regional',
		mode: /** @type {'train'} */('train'), // eslint-disable-line @stylistic/no-extra-parens
		bitmasks: [8],
		name: 'Regio',
		short: 'RB',
		default: true,
	},
	{
		id: 'suburban',
		mode: /** @type {'train'} */('train'), // eslint-disable-line @stylistic/no-extra-parens
		bitmasks: [16],
		name: 'S-Bahn',
		short: 'S',
		default: true,
	},
	{
		id: 'bus',
		mode: /** @type {'bus'} */('bus'), // eslint-disable-line @stylistic/no-extra-parens
		bitmasks: [32],
		name: 'Bus',
		short: 'B',
		default: true,
	},
	{
		id: 'ferry',
		mode: /** @type {'watercraft'} */('watercraft'), // eslint-disable-line @stylistic/no-extra-parens
		bitmasks: [64],
		name: 'Ferry',
		short: 'F',
		default: true,
	},
	{
		id: 'subway',
		mode: /** @type {'train'} */('train'), // eslint-disable-line @stylistic/no-extra-parens
		bitmasks: [128],
		name: 'U-Bahn',
		short: 'U',
		default: true,
	},
	{
		id: 'tram',
		mode: /** @type {'train'} */('train'), // eslint-disable-line @stylistic/no-extra-parens
		bitmasks: [256],
		name: 'Tram',
		short: 'T',
		default: true,
	},
	{
		id: 'taxi',
		mode: /** @type {'taxi'} */('taxi'), // eslint-disable-line @stylistic/no-extra-parens
		bitmasks: [512],
		name: 'Group Taxi',
		short: 'Taxi',
		default: true,
	},
];

export {
	products,
};

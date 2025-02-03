/**
 * @import {RoutingMode} from "../../types"
 */

// see https://pastebin.com/qZ9WS3Cx
const routingModes = {
	OFF: /** @type {RoutingMode} */('OFF'), // eslint-disable-line @stylistic/no-extra-parens
	INFOS: /** @type {RoutingMode} */('INFOS'), // eslint-disable-line @stylistic/no-extra-parens
	FULL: /** @type {RoutingMode} */('FULL'), // eslint-disable-line @stylistic/no-extra-parens
	REALTIME: /** @type {RoutingMode} */('REALTIME'), // eslint-disable-line @stylistic/no-extra-parens
	SERVER_DEFAULT: /** @type {RoutingMode} */('SERVER_DEFAULT'), // eslint-disable-line @stylistic/no-extra-parens
	HYBRID: /** @type {RoutingMode} */('HYBRID'), // eslint-disable-line @stylistic/no-extra-parens
};

export {
	routingModes,
};

// eslint-disable-next-line import/no-extraneous-dependencies
const rewireReactHotLoader = require("react-app-rewire-hot-loader");
const rewireCssModules = require("./rewireConfig/cssModules");
const rxPipeableOperators = require("./rewireConfig/pipeableOperators");

/* A note on configuration:
 * When configuring mulitple override files, use the built-in `compose` function.
 * @see https://github.com/timarney/react-app-rewired#2-composeafter-v134
 */

module.exports = function override(config, env) {
    config = rewireCssModules(config, env);
    config = rewireReactHotLoader(config, env);
    config = rxPipeableOperators(config, env);
    return config;
};

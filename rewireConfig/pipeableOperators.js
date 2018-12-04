/* eslint-disable import/no-extraneous-dependencies */
const webpack = require("webpack");
/* eslint-enable */
const rxPaths = require("rxjs/_esm5/path-mapping");

/**
 * This override re-maps RxJS paths in order to reduce total bundle size.
 * Relies on Webpack v3+ `ModuleConcatenationPlugin`.
 *
 * For example, with only using 3 separate operators, the bundle size decreased by 3.59kb gzipped.
 *
 * @see RxJS Treeshaking https://github.com/ReactiveX/rxjs/blob/master/doc/pipeable-operators.md#build-and-treeshaking
 * @see ModuleConcatenationPlugin https://webpack.js.org/plugins/module-concatenation-plugin/
 */
module.exports = function override(config /*, env*/) {
    // Use the "alias" key to resolve to an ESM distribution
    const { alias } = config.resolve;
    config.resolve.alias = Object.assign({}, alias, rxPaths());
    config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin());

    return config;
};

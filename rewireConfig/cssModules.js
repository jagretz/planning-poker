const path = require("path");
/* eslint-disable  import/no-extraneous-dependencies */
const postcssPresetEnv = require("postcss-preset-env");
const postcssCustomMedia = require("postcss-custom-media");
const postCssCustomProperties = require("postcss-custom-properties");
const postcssImport = require("postcss-import");
const postcssNested = require("postcss-nested");
const { getLoader } = require("react-app-rewired");
/* eslint-enable */

/**
 * This override extracts the original rules for CSS applied by create-react-app (CRA) to allow the
 * use of both static CSS files and teh use of CSS Modules.
 * - Updates the postCSS loader with additional postCss plugins.
 * - Adds a rule for css modules.
 *
 * Plugins added to postCSS apply to both static and module CSS.
 *
 * @param {object} config configuration provided through create-react-app
 * @param {object} env configured env. May be declared implicitly or explicitly with node before
 * running the command.
 * @return {object} overriden webpack configuration
 *
 * @see webpack rules https://webpack.js.org/configuration/module/#rule
 * @see cssLoader https://github.com/webpack-contrib/css-loader
 */
module.exports = function override(config, env) {
    const isProduction = env === "production";
    // Webpack uses a different property name for production only builds.
    const target = isProduction ? "loader" : "use";

    // Define the src paths where css modules are defined relative to this dir.
    const componentPaths = [
        path.resolve(__dirname, "../src/components/"),
        path.resolve(__dirname, "../src/containers/")
    ];

    // Get the css rule(s) that are configured by create-react-app
    const cssRule = getLoader(
        config.module.rules,
        rule => rule[target] && rule.test && rule.test.toString().indexOf("css") >= 0
    );

    /**
     * create-react-app applies the postCss loader by default.
     * We need to strip out the loader in order to add any additional postCss plugins.
     */
    const postcssLoader = getLoader(
        cssRule[target],
        loader => loader.loader && loader.loader.indexOf("postcss-loader") >= 0
    );
    const postcssLoaderIndex = cssRule[target].indexOf(postcssLoader);
    const postcssPlugins = cssRule[target][postcssLoaderIndex].options.plugins();

    /*
     * postcss-preset-env already contains autoprefixer so we remove the duplicate to improve performance.
     * We do this before we add any additional plugins.
     */
    const autoprefixerIndex = postcssPlugins.findIndex(plugin => plugin.postcssPlugin === "autoprefixer");
    if (autoprefixerIndex) postcssPlugins.splice(autoprefixerIndex, 1);

    postcssPlugins.push(
        postcssImport({
            path: path.resolve(__dirname, "../src/")
        }),
        postcssPresetEnv,
        postcssNested,
        postcssCustomMedia,
        postCssCustomProperties
    );

    cssRule[target][postcssLoaderIndex].options.plugins = () => postcssPlugins;

    /**
     * In order to include css modules with postCss loaders, we copy the customized css rule and update the
     * configuration to allow css modules.
     */
    const cssModulesRule = JSON.parse(JSON.stringify(cssRule));

    // Reapply regexp test case if a regexp was used (RegExp are not strings and cannot be copied copied like a string)
    if (cssRule.test instanceof RegExp) cssModulesRule.test = new RegExp(cssRule.test);

    // Reapply postCss plugins function
    cssModulesRule[target][postcssLoaderIndex].options.plugins = () => postcssPlugins;

    // Find the css-loader, and enable css modules
    const cssLoader = getLoader(
        cssModulesRule[target],
        loader => loader.loader && loader.loader.indexOf("css-loader") >= 0
    );
    const cssLoaderIndex = cssModulesRule[target].indexOf(cssLoader);

    cssModulesRule[target][cssLoaderIndex].options.modules = true;
    cssModulesRule[target][cssLoaderIndex].options.camelCase = "only";
    cssModulesRule[target][cssLoaderIndex].options.minimize = isProduction;
    cssModulesRule[target][cssLoaderIndex].options.localIdentName = isProduction
        ? "[hash:base64:12]"
        : "[name]__[local]--[hash:base64:5]";

    /**
     * Get the index of the cssRule, and
     * - splice in our customized cssRule effectively overwriting the original css rule.
     * - splice in our css rule that includes CSS modules.
     * Two separate rules are applied: One for global css, and one for css modules.
     */
    const oneOfIndex = config.module.rules.indexOf(getLoader(config.module.rules, rule => rule.oneOf));
    const cssRuleIndex = config.module.rules[oneOfIndex].oneOf.indexOf(cssRule);

    // Insert the static css rules
    config.module.rules[oneOfIndex].oneOf.splice(cssRuleIndex, 1, {
        test: /\.css$/,
        // Notice we exclude the css-modules directories.
        exclude: componentPaths,
        [target]: cssRule[target]
    });

    // Insert the css modules rule
    config.module.rules[oneOfIndex].oneOf.splice(cssRuleIndex + 1, 0, {
        test: /\.css$/,
        // Notice we only include the css-modules directories.
        include: componentPaths,
        [target]: cssModulesRule[target]
    });

    return config;
};

# Jest Configuration

A couple of quick notes about this directly and jest configuraiton in general.

### Order of execution

Whether configuraiton is detailed in the `package.json` or a separate jest configuration file,
> `setupFiles` executes before the test framework is installed in the environment, `setupTestFrameworkScriptFile` presents you the opportunity of running some code immediately _after_ the test framework has been installed in the environment.

### Test Configuration with create-react-app

❗ Jest configuration with **create-react-app (CRA)** MUST exist in `package.json`. It does not execute if contained in a separate jest configuration file.

Additionally, in order to work with versions of react `react@16.*` and greater, we must setup a specific enzyme adapter... which we assume you are also going to use to help you test react components. CRA helps you out with this be telling you to just plop a [`setupTests` script](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#srcsetuptestsjs) under the `src` dir of your project.

Thats fine and works, however, it hides what is really happinging and where jest reads that file from. CRA is configures jest to read `setupTests` into the [`setupTestFrameworkScriptFile`](https://facebook.github.io/jest/docs/en/configuration.html#setuptestframeworkscriptfile-string) jest configuration.

### Our Setup

Since we have several jest configurations to help our tests work out of the box when interacting with DOM related code, we have our own `<root>/jestConfig/` at the root of the project directory. In here we place our setup test files and our setup test framework file.

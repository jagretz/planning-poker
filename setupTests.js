/* eslint-disable import/no-extraneous-dependencies*/
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

/*
 * Setups up enzyme to work with Enzyme v3+.
 * This is required to run before all tests.
 * @see Testing Components https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#testing-components
 * @see Initializing Test Environment https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#initializing-test-environment
 */
configure({ adapter: new Adapter() });

//import { sayHi } from "../index";
const testfunctions = require('../testindex');

// Run the test
test('Returns a greeting as a string', function () {
	// should return a string
	expect(typeof testfunctions.sayHi()).toBe('string');

    // should include the provided name
	expect(testfunctions.sayHi('Merlin Jones').includes('Merlin')).toBe(true);

	// should return an integer
	expect(typeof testfunctions.addNumbers()).toBe('number');
});

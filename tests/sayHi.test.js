//import { sayHi } from "../index";
const testfunctions = require('../testindex');

// Run the test
test('Returns a greeting as a string', function () {
	// should return a string
	expect(typeof testfunctions.sayHi()).toBe('string');
});

test('function should return a type of number', function () {
	// should return an integer
	expect(typeof testfunctions.addNumbers()).toBe('number');
});


test('Should include the provided name', function () {
	 // should include the provided name
	 expect(testfunctions.sayHi('Merlin Jones').includes('Merlin')).toBe(true);
});


test('Adds two numbers together to a result', function () {
	expect(testfunctions.addNumbers(2,5)).toBe(7);
});



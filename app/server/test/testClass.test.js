'use strict';
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let expect = require('chai').expect;
let server = require('../app');
let testClass = require('../api/testClass');

describe("Test Class", function () {
	describe("userController.testFunction", function () {
    it("should return 2 times the input", function () {
			let value = testClass.testFunction(2);
			
			expect(value).to.equal(4);
		});
	});
});

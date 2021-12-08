'use strict';
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

describe("User API", () => {
	let testUser = {
		username: "testuser",
		password: "testpassword"
	};
  before((done) => {
		done();
	});

	describe("/GET user", function () {
    it("should return user by username", (done) => {
			chai.request(server)
			.get('/api/user/' + testUser.username)
			.set('content-type', 'application/json')
			.send(testUser)
			.end((err, res) => {
				res.should.have.status(200);
				done();
			});
		});
	});

});

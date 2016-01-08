'use strict';

var request = require('supertest')
  , app = require('../index').getApp

describe('GET /', () => {

  it('expect HTTP response 200', (done) => {
      request(app)
        .get('/')
        .expect(200, done);
  })

})

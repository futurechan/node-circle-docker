'use strict';

var request = require('supertest')
  , app = require('../index').getApp

describe('GET /', function(){

  it('expect HTTP response 200', function(done){
      request(app)
        .get('/')
        .expect(200, done);
  })

})

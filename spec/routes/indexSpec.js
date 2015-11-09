var request = require('supertest');
var app = require('../../app');

describe('GET /', function () {
  it('should respond with html', function (done) {
    request(app)
      .get('/')
      .set('Accept', 'text/html')
      .expect('Content-Type', 'html')
      .expect(200, done);
  });
});

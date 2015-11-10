var request = require('supertest');
var app = require('../../app');

describe('GET /monitor', function () {
  it('should respond with html', function (done) {
    request(app)
      .get('/monitor')
      .set('Accept', 'text/html')
      .expect('Content-Type', 'html')
      .expect(200, done);
  });
});

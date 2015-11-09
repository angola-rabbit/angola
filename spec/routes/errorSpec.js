var request = require('supertest');
var app = require('../../app');

describe('GET /none-exists', function () {
  it('should respond with html and 404 error', function (done) {
    request(app)
      .get('/none-exists')
      .set('Accept', 'text/html')
      .expect('Content-Type', 'html')
      .expect(404, done);
  });
});

var request = require('supertest');
var app = require('../../app');

describe('GET /search', function () {
  it('should respond with html', function (done) {
    request(app)
      .get('/search')
      .set('Accept', 'text/html')
      .expect('Content-Type', 'html')
      .expect(200, done);
  });
});

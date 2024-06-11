const request = require('supertest');
const express = require('express');
const chai = require('chai');
const expect = chai.expect;

const app = express();
const port = 3000;

// Define the route as in your main app
app.get('/', (req, res) => {
  res.send('Hello World from Node.js on Kubernetes!');
});

describe('GET /', () => {
  it('should return Hello World message', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /text\/html/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Hello World from Node.js on Kubernetes!');
        done();
      });
  });
});

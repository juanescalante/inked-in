const { expect } = require('chai');
const request = require('supertest');
const server = require('../server');

let token;
describe('user test', () => {
  it('Get test user route', (done) => {
    request(server)
      .get('/api/users')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.not.equal(null);
        done();
      });
  });

  it('Register User', (done) => {
    const user = {
      name: 'Sponge Bob',
      email: 'spongebob@gmail.com',
      password: 'w3bxury1129',
    };
    request(server)
      .post('/api/users')
      .set('Accept', 'application/json')
      .send(user)
      .expect(200)
      .end((err, res) => {
        expect(res.body.token).to.not.equal(null);
        done();
      });
  });

  it('Find token by email and password', (done) => {
    const credential = {
      email: 'spongebob@gmail.com',
      password: 'w3bxury1129',
    };
    request(server)
      .post('/api/auth')
      .set('Accept', 'application/json')
      .send(credential)
      .expect(200)
      .end((err, res) => {
        expect(res.body.token).to.not.equal(null);
        // eslint-disable-next-line prefer-destructuring
        token = res.body.token;
        done();
      });
  });

  // localhost:5000/api/auth

  it('Find one user', (done) => {
    request(server)
      .get('/api/auth')
      .set('Accept', 'application/json')
      .set('x-auth-token', token)
      .expect(200)
      .end((err, res) => {
        expect(res.body.name).equal('Sponge Bob');
        expect(res.body.email).equal('spongebob@gmail.com');
        done();
      });
  });
});

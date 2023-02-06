const User = require('../../models/User')
const app = require('../../server') // my express app
const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const should = chai.should();

describe('Auth', () => {

    beforeEach((done) => {
        const user = {
            "email": "user@test.com",
            "name": "test user",
            "password": "testuser",
            "address": "the one",
            "education_qualification": "bsc",
            "job_title": "creating",
            "contact_number": 9836789211,
            "dob": "2020-10-20T00:00:00.000Z",
        }
        User.storeUser(user).then(
            (result) =>{
                done()
            }
            
        )
    });

    describe('/POST user login', () => {
        const user = {
            "email": "user@test.com",
            "password": "testuser",
        }
        it('it should login the user', (done) => {
            chai.request(app)
                .post('/api/auth/login')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    // expect(res.body.token).to.be.a("string")
                    done();
                });
        });
    })

})
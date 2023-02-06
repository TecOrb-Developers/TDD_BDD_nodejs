const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const mongoose = require("mongoose");

chai.use(chaiHttp);

require('./api/user.test')
require('./api/auth.test')
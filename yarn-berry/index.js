const moment = require('moment');
const shortId = require('shortid');
const { faker } = require('@faker-js/faker');
const firebaseAdmin = require('firebase-admin');

const result = {
  id: shortId.generate(),
  name: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  birthdate: faker.date.birthdate(),
  createdAt: moment().format()
};

console.log('result (yarn-berry)', result);

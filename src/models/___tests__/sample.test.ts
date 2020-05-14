import { expect } from 'chai';

import 'config/env';
import * as http from 'http';
import supertest from 'supertest';

import app from 'app';
import Country from 'models/country';

supertest(http.createServer(app.callback()));

describe('First test', () => {
  it('should return true', async () => {
    console.log('Zaczynamy test');
    expect(1).to.equal(1);

    const country = new Country({ name: 'Polska' });
    console.log('Przed zapisem');
    await country.save();
    console.log('Po zapisie');
    expect(country.name).to.equal('Polska');
  });
});


// // import mongoose from 'mongoose';

// 

// // import { connectionUrl, connectionSettings } from 'config/db';

// 


// const sleep = time => new Promise(resolve => setTimeout(() => { resolve(); }, time * 1000));

// describe('Sample testing', () => {
//   beforeAll(async (done) => {
//     console.log('Mongoose przed połączeniem');

//     await sleep(2);

//     console.log('Mongoose po połączeniu');

//     done();
//     // mongoose.connect(connectionUrl, connectionSettings).then(() => {
//     //   console.log('Mongoose po połączeniu');
//     //   done();
//     // }).catch(error => console.log('blad', error));

//   });

//   // afterAll((done) => {
//   //   mongoose.disconnect(done);
//   // });
// });

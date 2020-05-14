import 'config/env';
import * as http from 'http';
import supertest from 'supertest';
// import mongoose from 'mongoose';

import app from 'app';
import Country from 'models/country';
// import { connectionUrl, connectionSettings } from 'config/db';

supertest(http.createServer(app.callback()));

// jest.setTimeout(5000);

const sleep = time => new Promise(resolve => setTimeout(() => { resolve(); }, time * 1000));

describe('Sample testing', () => {
  beforeAll(async (done) => {
    console.log('Mongoose przed połączeniem');

    await sleep(2);

    console.log('Mongoose po połączeniu');

    done();
    // mongoose.connect(connectionUrl, connectionSettings).then(() => {
    //   console.log('Mongoose po połączeniu');
    //   done();
    // }).catch(error => console.log('blad', error));
    
  });

  it('Sample group should', async (done) => {
    console.log('Zaczynamy test');
    expect(1).toEqual(1);

    const country = new Country({ name: 'Polska' });
    console.log('Przed zapisem');
    await country.save();
    console.log('Po zapisie');
    expect(country.name).toEqual('Polska');

    done();
  });

  // afterAll((done) => {
  //   mongoose.disconnect(done);
  // });
});

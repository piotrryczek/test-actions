import 'config/env';
import * as http from 'http';
import supertest from 'supertest';
import mongoose from 'mongoose';

import app from 'app';
import Country from 'models/country';
import { connectionUrl, connectionSettings } from 'config/db';

supertest(http.createServer(app.callback()));

// jest.setTimeout(5000);

describe('Sample testing', () => {
  beforeAll(async (done) => {
    console.log('Mongoose przed połączeniem');
    await mongoose.connect(connectionUrl, connectionSettings);
    console.log('Mongoose po połączeniu');
    done();
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

  afterAll((done) => {
    mongoose.disconnect(done);
  });
});

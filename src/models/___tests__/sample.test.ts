import 'config/env';
import * as http from 'http';
import supertest from 'supertest';
import mongoose from 'mongoose';

import app from 'app';
import Country from 'models/country';
import { connectionUrl, connectionSettings } from 'config/db';

supertest(http.createServer(app.callback()));

describe('Sample testing', () => {
  beforeAll(async (done) => {

    await mongoose.connect(connectionUrl, connectionSettings);

    done();
  });

  it('Sample group should', async (done) => {
    expect(1).toEqual(1);

    const country = new Country({ name: 'Polska' });
    await country.save();

    expect(country.name).toEqual('Polska');

    done();
  });

  afterAll((done) => {
    mongoose.disconnect(done);
  });
});

import { expect } from 'chai';

import 'config/env';

import mongoose from 'mongoose';
// import * as http from 'http';
// import supertest from 'supertest';

// import app from 'app';
import { connectionUrl, connectionSettings } from 'config/db';
import Country from 'models/country';

// supertest(http.createServer(app.callback()));

describe('Sample describe', () => {
  before(async () => {
    console.log('Connection URL:', connectionUrl);
    return new Promise((resolve, reject) => {
      mongoose.connect(connectionUrl, connectionSettings).then(() => {
        console.log('Connected');
        resolve();
      }).catch((error) => {
        console.log('Error:', error);
        reject(error);
      });
    });
  });

  it('Sample test', async () => {
    console.log('Starting test');
    expect(1).to.equal(1);

    const country = new Country({ name: 'Poland' });
    console.log('Before save');
    await country.save();
    console.log('After save');
    expect(country.name).to.equal('Poland');
  });
});

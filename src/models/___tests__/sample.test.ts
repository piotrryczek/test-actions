import { expect } from 'chai';
import * as http from 'http';
import supertest from 'supertest';

import 'config/env';
import app from 'app';
import Country from 'models/country';

supertest(http.createServer(app.callback()));

describe('Sample describe', () => {
  it('Sample test', async () => {
    expect(1).to.equal(1);

    const country = new Country({ name: 'Poland' });
    await country.save();
    expect(country.name).to.equal('Poland');
  });
});

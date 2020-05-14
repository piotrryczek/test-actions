import 'config/env';
import * as http from 'http';
import supertest from 'supertest';
import app from 'app';
import Country from 'models/country';
import db from 'config/db';
import util from 'util';

console.log(util.inspect(db, {showHidden: false, depth: null }));
supertest(http.createServer(app.callback()));

describe('Sample testing', () => {
  it('Sample group should', async (done) => {
    expect(1).toEqual(1);

    const country = new Country({ name: 'Polska' });
    await country.save();

    expect(country.name).toEqual('Polska');

    done();
  });
});

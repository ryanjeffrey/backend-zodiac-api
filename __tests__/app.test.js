const request = require('supertest');
const app = require('../lib/app');

const { zodiac } = require('../lib/zodiac-data');

describe('zodiac routes', () => {
  it('/zodiac should return a list of zodiac signs', async () => {
    const res = await request(app).get('/zodiac');
    const expected = zodiac.map((sign) => {
      return { id: sign.id, name: sign.name };
    });
    expect(res.body).toEqual(expected);
  });
});

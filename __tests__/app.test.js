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

  it('/zodiac/:id should return zodiac sign detail', async () => {
    const res = await request(app).get('/zodiac/7');
    const libra = {
      id: '7',
      name: 'libra',
      dates: 'Sept 23 - Oct 22',
      symbol: 'Balance',
    };
    expect(res.body).toEqual(libra);
  });
});

describe('horoscopes routes', () => {
  it('/horoscopes/:sign should return a horoscope', async () => {
    const res = await request(app).get('/horoscopes/aquarius');
    const aquarius = {
      sign: 'aquarius',
      date: '2022-11-01',
      horoscope:
        'You may have a hard time appreciating the little things this morning, dear Aquarius, as the moon forms a harsh square with the nodes of fate. Certain lifestyle luxuries, personal success, and status may not taste as sweet as you\'d hoped, causing you to close off emotionally. Don\'t be hard on yourself if you\'re feeling disenchanted with the world, but try to reach for that which brings you joy. The vibe will be charged within your domestic affairs when Luna squares off with Uranus this afternoon, so you\'ll want to be on guard for finicky appliances or temperamental roommates.',
    };
    expect(res.body).toEqual(aquarius);
  });
});

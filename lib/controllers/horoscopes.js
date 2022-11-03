const { Router } = require('express');
const fetch = require('cross-fetch');

module.exports = Router().get('/:name', async (req, res) => {
  const horoscope = await getHoroscope(req.params.name);
  return res.json(horoscope);
});

async function getHoroscope(sign) {
  const response = await fetch(`https://ohmanda.com/api/horoscope/${sign}`);
  return await response.json();
}

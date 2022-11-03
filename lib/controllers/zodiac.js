const { Router } = require('express');
const { zodiac } = require('../zodiac-data');

module.exports = Router()
  .get('/:id', (req, res) => {
    const match = zodiac.find(sign => sign.id === req.params.id);
    return res.json(match);
  })
  .get('/', (req, res) => {
    const filteredData = zodiac.map((sign) => ({ id: sign.id, name: sign.name }));
    res.json(filteredData);
  });

const { Router } = require('express');
const { zodiac } = require('../zodiac-data');

module.exports = Router()
  .get('/:id', (req, res) => {
    let match;
    for (const sign of zodiac) {
      if (sign.id === req.params.id) {
        match = sign;
      }
    }
    return res.json(match);
  })
  .get('/', (req, res) => {
    const filteredData = [];
    for (const sign of zodiac) {
      filteredData.push({ id: sign.id, name: sign.name });
    }
    res.json(filteredData);
  });

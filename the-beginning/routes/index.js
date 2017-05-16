const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const george = { name: 'George', age: '28', cool: true };
  //res.send('IT Works');
  //res.json(george);
  //res.send(req.query.age);
  //res.json(req.query);
  res.render();
});

router.get('/reverse/:name', (req, res) => {
  const name = req.params.name;
  const reversedName = [...name].reverse().join('');
  res.send(reversedName);
});

module.exports = router;

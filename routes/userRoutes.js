const newUser = require('../controllers/user');

const express = require('express');
const router = express.Router();

router.get('/list', (req, res) => {
  res.send(`${newUser.Email} test`);
});

router.get('/:id', (req, res) => {
  res.send(`User detail for user ${req.params.id}`)
});

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/list', (req, res) => {
  res.send('User list');
});

router.get('/:id', (req, res) => {
  res.send(`User detail for user ${req.params.id}`)
});

module.exports = router;
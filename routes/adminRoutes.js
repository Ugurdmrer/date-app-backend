const express = require('express');
const router = express.Router();

router.get('/getAllUsers', (req, res) => {
  res.send('User list');
});

router.get('/getUser:id', (req, res) => {
    res.send(`User detail for user`)
});

router.delete('/:id', (req, res) => {
    try {
        res.send(`User deleted.`)
    }catch{
        res.send(`User not deleted.`)
    }
});

router.patch('/:id', (req, res) => {
    try {
        res.send(`User updated.`)
    }catch{
        res.send(`User not updated.`)
    }
});

router.post('/addAdmin', (req, res) => {
    try {
        res.send(`Admin added.`)
    }catch{
        res.send(`Admin not added.`)
    }
});





module.exports = router;
const express = require('express');
const router = express.Router();
const addUser = require('../controllers/user.js');
const User = require("../models/user.js");

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


router.post('/addUser', async (req, res) => {
    try {
        await addUser(
            req.body
        )
        res.status(201).json({ message: 'Kullanıcı başarıyla eklendi' });
    }catch{
        res.send(`User not added. request body:  ${req.body}`)
    }
});





module.exports = router;
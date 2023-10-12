const express = require('express');
const router = express.Router();
const addUser = require('../controllers/user.js');

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


router.post('/addUser', (req, res) => {
    try {
        res.send(
            addUser(
                this.name = req.body.name,
                this.surname = req.body.surname,
                this.username = req.body.username,
                this.email = req.body.email,
                this.password = req.body.password,
                this.profileImage = req.body.profileImage,
                this.images = req.body.images,
                this.description = req.body.description,
                this.gender = req.body.gender,
                this.isAdmin = req.body.isAdmin
            ) 
        )
    }catch{
        res.send(`User not added. request body:  ${req.body}`)
    }
});





module.exports = router;
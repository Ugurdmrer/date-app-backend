const express = require('express');
const router = express.Router();


router.post('/login', (req, res) => {
    try{
        res.send('User login');
    }catch{
        res.send('User not logged in');
    }
});

router.post('/register', (req, res) => {
    try{
        res.send('User register');
    }catch{
        res.send('User not registered');
    }
});



module.exports = router;
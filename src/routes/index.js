const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.render('index.html');
});

router.get('/contacto', (req, res)=>{
    res.render('contacto.html');
});

router.get('/tipo', (req, res)=>{
    res.render('tipo.html');
});

router.get('/album', (req, res)=>{
    res.render('album.html');
});
module.exports = router;
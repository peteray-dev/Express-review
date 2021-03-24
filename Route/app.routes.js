const express = require('express')

const router = express.Router();




router.get('/', (req, res, next)=>{
    // res.send('<h1>Welcome to Work<h1>');
     // to locate a file
     res.render('index.ejs', {
         title: 'Strongest'
     })
})
router.get('/about', (req, res, next)=>{
    res.render('about-us.ejs', {
        title: 'Read more about us'
    })
})
router.get('/contact', (req, res, next)=>{
    res.render('contact-us.ejs', {
        title: 'Contact-us'
    })
})

router.post('/message', (req, res, next)=>{
        // console.log(req.body);
        res.send(req.body)
})

module.exports = router;
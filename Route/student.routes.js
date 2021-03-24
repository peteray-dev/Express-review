const express = require('express')
const data = require('../data')

const router = express.Router()



router.get('/', (req, res, next)=>{
    res.render('students/studentList.ejs',{
        title:'Student lists',
        student : data,
    } 
        
    )
})

// Query selector
router.get("/:id/:name", (req, res, next)=>{  //this id and name are paramwter
    // console.log(req.params);
    res.send(`student ${req.params.id} with username ${req.params.name}`)
})

router.get('/api/students', (req, res, next)=>{
    res.status(200).json({
        data
    })
})

module.exports = router
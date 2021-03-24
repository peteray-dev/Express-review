const express = require('express');

const app = express();

//for form you really need this stuff, if bulding with api you need the 2. the two is highly important
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// const data = require("./data")
const homeRoute = require('./Route/app.routes')
const studentRoute = require('./Route/student.routes')


app.set('view engine', 'ejs')
app.set('views', './views') // the second views is the file containing the

//ROUTES
app.use('/', homeRoute)
app.use('/students', studentRoute)

app.use('/static', express.static('./public'))
// app.use(express.static('./public')) //wiithout indicating the base url for it, it will autmatically take in the '/' url


//handle 404 error on get request or each of them
// app.get('*', (req, res, next)=>{
//     res.send('404')
// })

//handle all the http methods 404
app.all('*', (req, res, next)=>{
    res.send("<h1>Error 😖😖 </h1>")
})


const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}`);
})
const express = require("express");
const app = express();

// Connection

require('./database_connection/connection_db');


app.use(express.json());

// Authentication

app.use(require('./Routes/auth'));


// Module

// const Student = require('./module/studentSchema');
// const College = require('./module/collegeSchema');


//middeleware

const middeleware = (req,res, next) =>{
    console.log('Hello my middeleware');
    next();
}
// middeleware();


// app.get('/', (req, res) => {
//     res.send('hello world from server');
// });

app.get('/practice', (req, res) => {
    res.send('hello Home world from server');
});

app.get('/about', middeleware, (req, res) => {
    // console.log('Hello my about');
    res.send('hello About world from server');
});

app.get('/contact', (req, res) => {
    res.send('hello Contact world from server');
});

app.listen(3001, () => {
    console.log('Server is running at port no 3001');
});

console.log('hello Team from harshal and sahil 5:30');




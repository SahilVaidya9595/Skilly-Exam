const mongoose = require("mongoose");
const express = require("express");
const app = express();

// Connection Part.......................................................................................

const db = 'mongodb+srv://skillyexam:Skillyexam2022@cluster0.tnb6e.mongodb.net/SkillyExam?retryWrites=true&w=majority'

mongoose.connect(db).then(()=>{
    console.log("connected to database succesully")
}).catch((err)=>{
    console.log('connection failed');
});


// Module.......................................................................................

const Student = require('./module/studentSchema');
// const College = require('./module/collegeSchema');


//middeleware

const middeleware = (req,res, next) =>{
    console.log('Hello my middeleware');
    next();
}
// middeleware();
app.get('/', (req, res) => {
    res.send('hello world from server');
});

app.get('/practice', (req, res) => {
    res.send('hello Home world from server');
});

app.get('/about', middeleware, (req, res) => {
    console.log('Hello my about');
    res.send('hello About world from server');
});

app.get('/contact', (req, res) => {
    res.send('hello Contact world from server');
});

app.listen(3001, () => {
    console.log('Server is running at port no 3001');
});

console.log('hello Team from harshal and sahil 5:30');
const mongoose = require("mongoose");


// Connection Part.......................................................................................

const db = 'mongodb+srv://skillyexam:Skillyexam2022@cluster0.tnb6e.mongodb.net/SkillyExam?retryWrites=true&w=majority'

mongoose.connect(db).then(()=>{
    console.log("connected to database succesully")
}).catch((err)=>{
    console.log('connection failed');
});
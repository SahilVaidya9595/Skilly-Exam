const express = require('express');
const Student = require('../module/studentSchema');
const bcrypt = require('bcrypt')


const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello world from server router js');
});

router.post('/register', async (req, res) => {

    const {firstname, lastname, age, gender, email, phone_no, username, password } = req.body;
    
    if (!firstname, !lastname, !age, !gender, !email, !phone_no, !username, !password)
    {
        return res.status(422).json('Plz filled the field properly');
    }

    try {

        const userExist = await Student.findOne({email: email});

        if (userExist) {
            return res.status(422).json({error: 'Email already exist'});
        }

        const student_new = new Student({firstname, lastname, age, gender, email, phone_no, username, password });
       
        // Password Encryption Decription

        const salt = await bcrypt.genSalt(10);
        student_new.password = await bcrypt.hash(student_new.password, salt);


        // Saving New Studnet Data in MongoDb Atlas
        const studentRegistered = await student_new.save();

        if (studentRegistered)
        {
            res.status(201).json('Student Registered Succesfully');
        } 


    } catch (err) {
        console.log(err);
    }


    // console.log(req.body.firstname);
    // res.json({message:req.body});
    // res.send('mera register page');
});


// login route

router.post('/signin', async (req, res) => {

    try {
        const {email, password} = req.body; 
        
        if (!email || !password)
        {
            return res.status(400).json('Plz filled the field properly');
        }

        const studentLogin = await Student.findOne({email:email});

        if (studentLogin)
        {
            const isMatch = await bcrypt.compare(password, studentLogin.password);

            if (!isMatch)
            {
                res.json({error: "Student not found"});
            }
            else {
                console.log(studentLogin);
                res.json({message: "Student Logged in successully"});
            }
        } else {
            res.json({error: "Student not found"});
        }

        const isMatch = await bcrypt.compare(password, studentLogin.password);

        if (!isMatch)
        {
            res.json({error: "Student not found"});
        }

        console.log(studentLogin);
        res.json({message: "Student Logged in successully"});

    } catch(err) {
        console.log(err);
    }

    // console.log(req.body);

});


module.exports = router;
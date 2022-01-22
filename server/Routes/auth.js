const express = require('express');


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

    const student = require('../module/studentSchema');

    try {

        const userExist = await student.findOne({email: email});

        if (userExist) {
            return res.status(422).json({error: 'Email already exist'});
        }

        const student_new = new student({firstname, lastname, age, gender, email, phone_no, username, password });

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

router.post('/signin', (req, res) => {
    console.log(req.body);
});


module.exports = router;
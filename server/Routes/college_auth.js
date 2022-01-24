const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello world from server router js');
});

router.post('/college_register', async  (req,res) =>{

    const { college_name, applyer_full_name, applyer_age, applyer_gender, applyer_phone_no, college_address, college_email, college_password } = req.body;
    

    if (!college_name, !applyer_full_name, !applyer_age, !applyer_gender, !applyer_phone_no, !college_address, !college_email , !college_password)
    {
        return res.status(422).json({error: 'Plz filled the field properly'});
    }


    const College = require('../module/collegeSchema');

    try{
        const collegeExist = await College.findOne({college_email:college_email});

        if (collegeExist) {
            return res.status(422).json({error: 'College Email already exist'});
        }

        const college_new = new College({college_name, applyer_full_name, applyer_age, applyer_gender, applyer_phone_no, college_address, college_email, college_password });

        const collegeRegistered = await college_new.save();

        if (collegeRegistered)
        {
            res.status(201).json('College Registered Succesfully');
        } 

    } catch (err) {
        console.log(err);
    }
    
});

router.post('/signin', (req, res) => {
    console.log(req.body);
});


module.exports = router;

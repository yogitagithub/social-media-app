const express = require('express');
const User = require('../models/user');
const router = express.Router();
const bcrypt = require('bcrypt');
 const jwt = require('jsonwebtoken');



router.get('/', (req, res) => {
    res.send('User routes are working!');
});

router.post('/register', async (req, res) => {

      
    try {
    const data = req.body;

        const user = new User(data);
        await user.save();
       
        const token = jwt.sign({
            _id: user._id.toString()
        }, process.env.JWT_SECRET_KEY );
        res.status(201).send({ user, token, message: "User Created Successfully" });

    } catch (err) {
        res.status(400).send({ error: err });
    }
});

router.post('/login', async (req, res) => {
try {
    const { userName, password } = req.body;
    //validation
    if (!userName || !password) {
      return res.status(401).send({
        success: false,
        message: "Please provide userName or password",
      });
    }
    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "userName is not registerd",
      });
    }
    //password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Invalid username or password",
      });
    }
    return res.status(200).send({
      success: true,
      messgae: "login successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Login Callback",
      error,
    });
  }


 });

module.exports = router;
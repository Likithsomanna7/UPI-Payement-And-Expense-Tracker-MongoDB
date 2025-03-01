const express = require('express');
const router = express.Router();
const {signuphandler,signuphandler2}=require('../controllers/signup.js');
const { signinhandler, signinhandler2 } = require('../controllers/signin.js');
const { homepagehandler } = require('../controllers/home.js');

router.get('/',signinhandler);
router.post('/signin/submit',signinhandler2)
router.get('/signup',signuphandler2)
router.post('/signup/submit',signuphandler);
router.get('/home',homepagehandler);
module.exports=router 
const express = require('express');
const router = express.Router();
const { mainpagehandler,submithandler ,sucesshandler, insufficentbalance, transcationhandler, monthlyhandler, balancehandler, yearlyhandler, logouthandler} = require('../controllers/main.js');
router.get('/',mainpagehandler);
router.get('/logout',logouthandler)
router.get('/monthly',monthlyhandler);
router.get('/balance',balancehandler);
router.get('/yearly',yearlyhandler);
router.get('/transactions',transcationhandler)
router.get('/submit/in',insufficentbalance);
router.get('/submit/sucess',sucesshandler)
router.post('/submit',submithandler);


module.exports=router

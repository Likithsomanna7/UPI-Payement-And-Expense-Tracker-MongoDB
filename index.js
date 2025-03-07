const express =require('express');
const path = require('path')
const {connected}=require('./connection.js')
const model=require('./model/schema.js')
const router=require('./Routes/serve.js')
const router2=require('./Routes/main.js')
const cookieparser =require('cookie-parser');
const { authhandler } = require('./middleware/auth.js');

const app =express();


app.set('views', path.join(__dirname, 'views'));
app.set("view engine",'ejs')
app.use(cookieparser());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'Public'))); 
connected();
app.use('/pay',router);
app.use('/pay/main',authhandler,router2)
app.get('/',(req,res)=>{res.redirect("/pay/signin");})


app.listen(3000, () => {
    console.log("Successfully running on port 3000");
});


const model = require("../model/schema ")
const jwt = require("jsonwebtoken")
function logouthandler(req,res)
{
    res.clearCookie('uid');
   res.redirect('/pay/home');
}
async function monthlyhandler(req,res)
{
    const uid = req.cookies.uid;
    const decoded = jwt.verify(uid, "1234");
    const id = decoded._id;
    const user = await model.findOne({ _id: id });
    res.render("monthly",{User:user.transactions});
}
async function yearlyhandler(req,res)
{
    const uid = req.cookies.uid;
    const decoded = jwt.verify(uid, "1234");
    const id = decoded._id;
    const user = await model.findOne({ _id: id });
    res.render("yearly",{User:user.transactions});
}
async function balancehandler(req,res)
{
        const uid = req.cookies.uid;
        const decoded = jwt.verify(uid, "1234");
        const id = decoded._id;
        const user = await model.findOne({ _id: id });
        res.render("balance",{balance:user.deposit});
}
async function transcationhandler(req, res) {
    
        const uid = req.cookies.uid;
        const decoded = jwt.verify(uid, "1234");
        const id = decoded._id;
        const user = await model.findOne({ _id: id });
        res.render("transaction", { user: user.transactions });

}

function insufficentbalance(req,res)
{
    res.render("in");
}

function mainpagehandler(req,res)
{
    res.render("main");
}
function sucesshandler(req,res)
{
    res.render("sucess");
}
async function submithandler(req, res) {
    try {
        const temp = req.cookies.uid;
        const { autofill, amount } = req.body;
        const decoded = jwt.verify(temp, "1234");
        const id = decoded._id;
        const user = await model.findOne({ _id: id });

        if (!user) {
            return res.status(404);
        } 
        const left = user.deposit-amount;
        if(left<0)
            {
                return res.redirect("/pay/main/submit/in");
            }
        user.deposit=left
        user.transactions.push({
            autofill: autofill,
            amount: amount,
        });
        await user.save();
       res.redirect("/pay/main/submit/sucess");
    } 
    catch (error) {
        console.error("Error in submithandler:", error);
    }
}

module.exports= {mainpagehandler,submithandler,sucesshandler,insufficentbalance,logouthandler,transcationhandler,balancehandler,monthlyhandler,yearlyhandler}


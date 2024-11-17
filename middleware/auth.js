const { getuser } = require("../Service/auth");

async function authhandler(req,res,next)
{
const usertoken = req.cookies.uid;
    if(!usertoken)
         return res.redirect('/pay/signin');
    const user =getuser(usertoken);
    if(!user)
         return res.redirect('/pay/signin');
    req.user=user;
    next();
}
module.exports={authhandler}
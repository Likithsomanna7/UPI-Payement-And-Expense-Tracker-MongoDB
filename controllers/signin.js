const model = require('../model/schema ');
const bcrypt = require('bcrypt');
const { setuser } = require('../Service/auth');

function signinhandler(req, res) {
   res.render("signin");
}

async function signinhandler2(req, res) {
   const { Email, Password } = req.body;
   
   try {
      const user = await model.findOne({ Email:Email }); 
      if ((!user)) 
         return res.send('User not found');

      const hash = user.Password; 
      const isMatch = await bcrypt.compare(Password, hash);

       if(!isMatch)
         return res.send('User not found'); 
      else
       {
         const token =setuser(user)
         res.cookie('uid',token );
         return res.redirect('/pay/home/')
       }
   
   }
    catch (error) {
      console.log(error);
      return res.send('Server error');
   }
}


module.exports = { signinhandler, signinhandler2 };

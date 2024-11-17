const  mongoose = require('mongoose');
async function connected()
{
return mongoose.connect('mongodb://localhost:27017/UPI').then(()=>console.log("Sucessfully connected to the database"))
                                                    .catch((err)=>{console.log(err)});
}
module.exports ={connected};


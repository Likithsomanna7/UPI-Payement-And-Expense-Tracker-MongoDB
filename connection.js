const  mongoose = require('mongoose');
async function connected()
{
return mongoose.connect('mongodb+srv://likithsomanna7:VWVR4BxHiZzOzdCi@upi-db.3ve9a.mongodb.net/?retryWrites=true&w=majority&appName=UPI-db').then(()=>console.log("Sucessfully connected to the database"))
                                                    .catch((err)=>{console.log(err)});
}
module.exports ={connected};


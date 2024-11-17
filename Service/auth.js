const jwt = require("jsonwebtoken")
const secret ="1234"
function setuser(user)
{
    const payload=
    {
        _id:user._id,
        email:user.email
    }
    return jwt.sign(payload,secret)
}
function getuser(token)
{
    return jwt.verify(token,secret)
}
module.exports={setuser,getuser};
function homepagehandler(req,res)
{
    const uid = req.cookies.uid;   
    res.render("land",{uid:uid});
}
module.exports = {homepagehandler}
const home = function (req,res) {
    return res.render('home',{
        title:"HOME"
    })
}

module.exports = {home}
const Post = require("../models/post")

module.exports.home =  (req,res)=> {
    Post.find({}).populate('user').exec(function (err,posts) {
        if(err){
            console.log(err);
            return
        } 
        return res.render('home',{
            title:"HOME",
            posts:posts
        })
    })
}

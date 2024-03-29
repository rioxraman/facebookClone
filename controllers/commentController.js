const Comment = require("../models/comment")
const Post = require("../models/post")


module.exports.create = function(req,res){
    Post.findById(req.body.post,function(err,post){
        if(post){
            Comment.create({
                content:req.body.content,
                user:req.user._id,
                post:req.body.post
            },function (err,comment) {
                post.comments.push(comment)
                post.save();
                res.redirect('/')
                
            })
        }
    })
}

module.exports.destroy= function(req,res){
    Comment.findById(req.params.id,function(err,comment){
        if(comment.user==req.user.id){
            let postId=comment.post
            comment.remove()
            Post.findByIdAndUpdate(postId,{$pull:{comments:req.params.id}},function(err,result){
                return res.redirect('back')
            })
        }else{
            return res.redirect('back')
        }
    })
}

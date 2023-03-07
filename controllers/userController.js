const User = require("../models/user")

const profile = function (req,res) {
    return res.render('user_profile',{
        title:"HOME"
    })
}

const signUp = function (req,res) {
    return res.render('signup',{
        title:"Signin"
    })
}
const signIn = function (req,res) {
    return res.render('signin',{
        title:"Signup"
    })
}
const create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        req.flash('error', 'Passwords do not match');
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){req.flash('error', err); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){req.flash('error', err); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            req.flash('success', 'You have signed up, login to continue!');
            return res.redirect('back');
        }

    });
}
const createSession = function (req,res) {
    //action pending
    User.findOne({email: req.body.email}, function(err, user){
        if(err){req.flash('error', err); return}
        if(user){
            if(user.password != req.body.password){
                return res.redirect('back');
            }
            res.cookie('user_id',user.id)
            return res.redirect('/users/profile');
        } else{
            return res.redirect('/users/sign-in');
        }
    })
}

module.exports = {profile,signUp,signIn,create,createSession}
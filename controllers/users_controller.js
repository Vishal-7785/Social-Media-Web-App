const User = require('../models/user');


module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title: "profile"
    })
}

// redner sign-up page
module.exports.signUp = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    res.render('user_sign_up',{
        title: "Codeial | Sign Up"
    });
}

// redner sign-in page
module.exports.signIn = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    res.render('user_sign_in',{
        title: "Codeial | Sign In"
    });
}


// Get the Sign up data
 module.exports.create = function(req,res){
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
     User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log('Error in finding the user while signing up');
            return;
        }
        
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log('Error in creating the user while signing up');
                    return;
                }
                return res.redirect('/users/sign-in');
            });
        }else{
            return res.redirect('back');
        }
     })

 }
// Sign in and create session for the user
 module.exports.createSession = function(req,res){
    return res.redirect('/');
 }

// Logging out user
 module.exports.destroySession = function(req, res){
    req.logout(function(err) {
        if (err) { return next(err); }
 })
    res.redirect('/');
}

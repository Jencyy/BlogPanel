const isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        console.log("Auth")
        next();
    } else {
        res.redirect('/logInForm')
    }
 
    
}

module.exports = isAuth;
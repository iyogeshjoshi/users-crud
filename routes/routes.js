/**
 * Created by iyogeshjoshi on 29/10/14.
 */
// All the app routes for node app goes here
var users = require('./users');
var routes = require('./index');

module.exports = function(app, passport){
    // As with any middleware it is quintessential to call next()
    // if the user is authenticated
    var isAuthenticated = function (req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/');
    }

    app.get('/', routes);
    // app.use('/users', users);

    app.post('/login',
        passport.authenticate('local', { successRedirect: '/home',
            failureRedirect: '/',
            failureFlash: true })
    );
    // check isAuthenticated before each route which require
    // authentication
    app.get('/home',isAuthenticated, function(req, res){
        res.render('home', {user: req.user});
    })
};

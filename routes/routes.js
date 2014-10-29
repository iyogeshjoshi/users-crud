/**
 * Created by iyogeshjoshi on 29/10/14.
 */

module.exports = function(app, passport){
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

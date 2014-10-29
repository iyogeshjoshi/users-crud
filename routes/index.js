var express = require('express');

/* GET home page.*/
module.exports = {
    index: function(req, res){
        if(req.isAuthenticated()){
            res.redirect('/home');
        }else{
            res.render('index', { title: 'Express' });
        }
    }
};

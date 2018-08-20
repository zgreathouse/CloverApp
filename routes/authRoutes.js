
const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = app => {
  app.get('/auth/google',
    passport.authenticate('google', {
      scope: ['profile']
    })
  );

  app.get('/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      if(req.user.finishAccountSetup){
        res.redirect('/')
      } else {
        res.redirect('/user/edit') //will change later to accommidate frontend route vs backend route
      }
    }
  );

  // Get the current user
  app.get('/api/currentUser', (req, res) => {
    res.send(req.user);
  });

  //Logout the current User and redirects to root route
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

}

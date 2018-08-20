
const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = app => {
  // Get the current user
  app.get('/api/currentUser', (req, res) => {
    res.send(req.user);
  });

  // Logout the current User
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

}

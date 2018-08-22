const keys = require('../config/keys');

module.exports = app => {
  app.get(`/api`, (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next();
  }, (req, res, next) => {
    console.log("made it!");
    res.redirect(`${keys.MERCHANT_LOGIN_URL}`);
    next();
  }, (req, res) => {
    res.send('nice');
  });
};

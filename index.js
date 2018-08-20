const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

//class Models
require('./models/User');

const app = express();

//middlewares
// app.use(bodyParser.json());
// app.use(
//   cookieSession({
//     maxAge: 2592000000,
//     keys: [keys.cookieKey]
//   })
// );

app.use(passport.initialize());
app.use(passport.session());

//routes
// require('./routes/authRoutes')(app);

//dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);

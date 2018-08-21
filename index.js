const express = require('express');
// const cooki eSession = require('cookie-session');
const bodyParser = require('body-parser');

const keys = require('./config/keys');

const app = express();

//middlewares
app.use(bodyParser.json());
// app.use(
//   cookieSession({
//     maxAge: 2592000000,
//     keys: [keys.cookieKey]
//   })
// );

//routes
// require('./routes/authRoutes')(app);

//dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);

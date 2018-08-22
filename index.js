const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const keys = require('./config/keys');

const app = express();

//middlewares
// app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next();
});

//routes
require('./routes/authRoutes')(app);
require('./routes/inventoryRoutes')(app);

//dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);

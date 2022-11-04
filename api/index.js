const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router/user');

const app = express();
app.use(cors("*"));
const db = require("./model/db");

app.use('/user', router);
app.listen(5000, () => {
  console.log('Server started on port 5000');
})
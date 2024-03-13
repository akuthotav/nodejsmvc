const express = require('express');
const connectDB = require('./config/dbConnection');
require('dotenv').config();
connectDB();
const app = express();

app.use(express.json());  // in place of body-parser
app.use('/api/users', require('./routes/userRoutes.js'))


app.listen(4000, () => {
   console.log('listening on, server is ready');
});
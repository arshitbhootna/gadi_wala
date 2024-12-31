const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');

connectToDb();
app.use(cors());
app.use('/',(req,res)=>{
    res.send("Hello world")
})
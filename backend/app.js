const express = require("express");
const cors = require("cors");
const cookieParser=require("cookie-parser");

const app = express();

app.use(cors({
    origin:"*",
    credentials:true
}))
app.use(express.json({limit:"18kb"}));
app.use(express.urlencoded({extended:true,limit:"18kb"}));
app.use(cookieParser());



module.exports = app;

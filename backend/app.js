const express = require ("express");
const app=express();
const ErrorHandler= require("./middleware/error");

if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path: "backend/confg/.env",
    });
}

//app.use(ErrorHandler);
module.exports=app;
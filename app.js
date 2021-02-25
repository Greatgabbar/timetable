const express = require('express');
require('dotenv').config();
const app= express();

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/timetable.html');
})

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(1);
})
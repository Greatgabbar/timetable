const express = require('express');

const app= express();

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/timetable.html');
})

const port = 5000 || process.env.PORT;

app.listen(port,()=>{
    console.log(1);
})
const express = require('express');
require('dotenv').config();
const app= express();
const ejs=require('ejs');

const data={
    Monday : [
        {
            time : "8:00 am",
            link : "https://tiet.zoom.us/my/CSED8",
            code : "UCS310 L"
        },
        {
            time : "8:50 am",
            link : "https://tiet.zoom.us/my/eied1",
            code : "UES034 L"
        },
        {
            time : "9:40 am",
            link : "https://tiet.zoom.us/my/CSED8",
            code : "UCS411 L"
        },
        {
            time : "10:30 am",
            link : "https://tiet.zoom.us/my/CSED8",
            code : "UCS415 L"
        },
        {
            time : "11:20 am",
            link : "https://tiet.zoom.us/my/CSED8",
            code: "UTA014 P"
        },
        {
            time : "1:50 pm",
            link : "https://tiet.zoom.us/my/CSED9",
            code: "UCS414 P"
        },
        {
            time : "3:30 pm",
            link : "https://tiet.zoom.us/my/mee01",
            code: "UTA026 P"
        },
        {
            time : "5:10 pm",
            link : "https://tiet.zoom.us/my/mee05",
            code: "UES010 L"
        }
    ],
    Tuesday : [
        {
            time : "8:50 am",
            link : "https://tiet.zoom.us/my/CSED8",
            code : "UCS310 L"
        },
        {
            time : "9:40 am",
            link : "https://tiet.zoom.us/my/CSED8",
            code : "UCS414 L"
        },
        {
            time : "11:20 am",
            link : "https://tiet.zoom.us/my/mee01",
            code : "UTA026 L"
        },
        {
            time : "12:10 pm",
            link : "https://tiet.zoom.us/my/eied2",
            code : "UES034 L"
        },
        {
            time : "3:30 pm",
            link : "https://tiet.zoom.us/my/eied8",
            code : "UES034 P"
        }
    ],
    Wednesday : [
        {
            time : "8:50 am",
            link : "https://tiet.zoom.us/my/CSED8",
            code : "UCS411 L"
        },
        {
            time : "9:40 am",
            link : "https://tiet.zoom.us/my/CSED8",
            code : "UCS415 L"
        },
        {
            time : "10:30 am",
            link : "https://tiet.zoom.us/my/eied2",
            code : "UES034 L"
        },
        {
            time : "11:20 am",
            link : "https://tiet.zoom.us/my/CSED8",
            code : "UTA014 L"
        },
        {
            time : "2:40 pm",
            link : "https://tiet.zoom.us/my/CSED9",
            code : "UCS415 P"
        }
    ],
    Thursday : [
        {
            time : "8:00 am",
            link : "https://tiet.zoom.us/my/ECED11",
            code : "UTA014 P"
        },
        {
            time : "1:50 am",
            link : "https://tiet.zoom.us/my/CSED12",
            code : "UCS411 P"
        },
        {
            time : "3:30 pm",
            link : "https://tiet.zoom.us/my/CSED9",
            code : "UCS411 L"
        },
        {
            time : "4:20 am",
            link : "https://tiet.zoom.us/my/CSED9",
            code : "UCS415 L"
        }
    ],
    Friday : [
        {
            time : "10:30 am",
            link : "https://tiet.zoom.us/my/mee01",
            code : "UTA026 L"
        },
        {
            time : "11:20 am",
            link : "https://tiet.zoom.us/my/CSED8",
            code : "UCS310 L"
        },
        {
            time : "12:10 pm",
            link : "https://tiet.zoom.us/my/CSED8",
            code : "UCS414 L"
        },
        {
            time : "2:40 pm",
            link : "https://tiet.zoom.us/my/CSED6",
            code : "UCS310 P"
        }
    ]
}

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    const date= new Date();
    const day= weekday[date.getDay()];
    console.log(day);
    res.render('index' , {data : data , day: day});
})

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(1);
})
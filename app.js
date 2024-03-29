const express = require('express');
require('dotenv').config();
const app= express();
const ejs=require('ejs');

const data={
    Monday : [
        {
            time : "8:50 am",
            link : "https://tiet.zoom.us/my/eied1",
            code : "UCS234 L"
        },
        {
            time : "9:40 am",
            link : "https://tiet.zoom.us/my/CSED8",
            code : "UTA014 L"
        },
        {
            time : "10:30 am",
            link : "https://tiet.zoom.us/my/CSED8",
            code : "UTA014 L"
        },
        {
            time : "11:20 am",
            link : "https://tiet.zoom.us/my/CSED10",
            code: "UTA014 P"
        },
        {
            time : "1:50 pm",
            link : "https://tiet.zoom.us/my/CSED9",
            code: "UCS41 L"
        },
        {
            time : "3:30 pm",
            link : "https://tiet.zoom.us/my/mee01",
            code: "UTA026 P"
        }
    ],
    Tuesday : [
        {
            time : "8:50 am",
            link : "https://tiet.zoom.us/my/CSED8",
            code : "UCS342 L"
        },
        {
            time : "9:40 am",
            link : "https://tiet.zoom.us/my/CSED8",
            code : "UCS544 L"
        },
        {
            time : "11:20 am",
            link : "https://tiet.zoom.us/my/mee01",
            code : "UTA026 L"
        },
        {
            time : "12:10 pm",
            link : "https://tiet.zoom.us/my/eied2",
            code : "U32034 L"
        },
        {
            time : "3:30 pm",
            link : "https://tiet.zoom.us/my/eied8",
            code : "U32034 P"
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
            code : "UCSFR5 L"
        },
        {
            time : "10:30 am",
            link : "htps://tiet.zoom.us/my/eied2",
            code : "3234 L"
        },
        {
            time : "11:20 am",
            link : "https://tiet.zoom.us/my/CSED8",
            code : "U3214 L"
        },
        {
            time : "2:40 pm",
            link : "https://tiet.zoom.us/my/CSED9",
            code : "UMA415 P"
        }
    ],
    Thursday : [
        {
            time : "8:00 am",
            link : "https://tiet.zoom.us/my/ECED11",
            code : "UCS014 P"
        },
        {
            time : "1:50 pm",
            link : "https://tiet.zoom.us/my/csed12?pwd=VGUxNlkvSC90azZSeWYvWXdmbVVudz09",
            code : "ULA411 P"
        },
        {
            time : "3:30 pm",
            link : "https://tiet.zoom.us/my/CSED9",
            code : "UCS411 L"
        },
        {
            time : "4:20 pm",
            link : "https://tiet.zoom.us/my/CSED9",
            code : "UCS415 L"
        }
    ],
    Friday : [
        {
            time : "9:40 am",
            link : "https://tiet.zoom.us/my/CSED8",
            code : "UCS310 L"
        },
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
    ],
    Saturday : [
        {
            time : "8:50 am",
            link : "https://tiet.zoom.us/my/CSED8",
            code : "UCS342 L"
        },
        {
            time : "9:40 am",
            link : "https://tiet.zoom.us/my/CSED8",
            code : "UCS544 L"
        },
        {
            time : "11:20 am",
            link : "https://tiet.zoom.us/my/mee01",
            code : "UTA026 L"
        },
        {
            time : "12:10 pm",
            link : "https://tiet.zoom.us/my/eied2",
            code : "U32034 L"
        },
        {
            time : "3:30 pm",
            link : "https://tiet.zoom.us/my/eied8",
            code : "U32034 P"
        }
    ],
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
    let dateIST=new Date();
    dateIST.setHours(dateIST.getHours() + 5); 
dateIST.setMinutes(dateIST.getMinutes() + 30);
    const day= weekday[dateIST.getDay()];
    console.log(day);
    res.render('index' , {data : data , day: day});
})

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(1);
})

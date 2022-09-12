//imports
const express = require("express");
const bodyParser = require('body-parser');

//const declarations
const PORT = 8000;

//App creation
const app = express();

app.get("/api/:date?", (req, res)=>{
    //Take the value
    const time = new Date(req.params.date);

    //check if is a number
    let isnum = /^\d+$/.test(req.params.date);

    
    if(isnum){
        //console.log("only have numbers");
        const uinx = parseInt(req.params.date);
        const date = new Date(uinx);

        //Error message
        if(date =="Invalid Date") res.json({ error : "Invalid Date"});

        //console.log(uinx);
        res.json({"unix":uinx, utc: date.toUTCString()});
    } 

    //if(time =="Invalid Date") res.json({ error : "Invalid Date"});

    const uinx= 11111;
    const utc="test b";
    
    res.json({"unix":uinx,"utc":`${utc}`});
});

//end point for testing
app.get("/",(req,res)=>{
    res.send("ola mundo");  
});

//start the server
app.listen(PORT,()=>{
    //console.log("Open the port " + PORT + " to access the api");
});

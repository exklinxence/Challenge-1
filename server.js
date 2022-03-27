'use strict';

const express = require('express');
const axios  = require('axios');
const os      =  require("os");


// Constants
const PORT = 3000;
const HOST = '0.0.0.0';


const app = express();
app.get('/', (req, res) => {
  getVisitorIp(req, res)
});

function getDateTime(){
  let date_ob = new Date();

  let date = ("0" + date_ob.getDate()).slice(-2);
  
  // current month
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  
  // current year
  let year = date_ob.getFullYear();
  
  // current hours
  let hours = date_ob.getHours();
  
  // current minutes
  let minutes = date_ob.getMinutes();
  
  // current seconds
  let seconds = date_ob.getSeconds();

  return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
}

function getHostDetails(){
  return `${os.platform()} ${os.hostname()}`
}

function getEngine(){
  return `node:${process.version}`;
}


function getVisitorIp(req, res){  
    const response =  axios.get("https://api.ipify.org/?format=json")
    .then(response => {
      const userIp =  response.data.ip
      showData(userIp, req, res)
    
    })
    .catch( e => {
      showData("not found", req, res)
  
    })

}


function showData(userIp, req, res){
  res.json( {
    timestamp : getDateTime(),
    hostname: getHostDetails(),
    engine: getEngine(),
    "visitor ip":  userIp
    });
}

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
const express = require('express');
const app = express();
const https = require('https');
const path = require('path');


app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (res, req) => {
  res.send(__dirname + "/index.html")
})

const city = ["New York","Paris","Helsinki","Tokyo"];
let weather = [];

for (var i = 0; i < city.length; i++) {
url = "https://api.openweathermap.org/data/2.5/weather?q=" + city[i] + "&appid=f1231941a3a7d645b987724ca5d85de0&units=metric";
}



https.get(url, (resp) => {
  resp.on("data", (data) => {
    var data = JSON.parse(data);
     weather[i].temp = Math.round(data.main.temp);
     weather[i].description = data.weather[0].description;
    res.render('index', {
      ETemp: temp,
      EDescription: description
    });
  })
})

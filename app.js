const express = require('express');
const app = express();
const https = require('https');
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));

const city = ["New York", "Paris", "Helsinki", "Tokyo"];
let weather = [];
var temp = [];
let description = [];
let z;
let load = [false,false,false,false]

app.get('/', (req, res) => {
      for (var i = 0; i < city.length; i++) {

        url = "https://api.openweathermap.org/data/2.5/weather?q=" + city[i] + "&appid=f1231941a3a7d645b987724ca5d85de0&units=metric";

        https.get(url, (response) => {
          response.on("data", (data) => {

            let Data = JSON.parse(data);
            switch (Data.name) {
              case "New York":
                z = 0;
                temp[z] = Math.round(Data.main.temp);
                description[z] = Data.weather[0].description;
                load[z] = true;
                break;
              case "Helsinki":
                z = 1;
                temp[z] = Math.round(Data.main.temp);
                description[z] = Data.weather[0].description;
                load[z] = true;
                break;
              case "Paris":
                z = 2;
                temp[z] = Math.round(Data.main.temp);
                description[z] = Data.weather[0].description;
                load[z] = true;
                break;
              case "Tokyo":
                z = 3;
                temp[z] = Math.round(Data.main.temp);
                description[z] = Data.weather[0].description;
                load[z] = true;
                break;
            }
          })
        })
      }

      function Rendering() {
        if (load[0]&load[1]&load[2]&load[3]) {
          res.render('index', {
            TempNY: temp[0],
            TempPAR: temp[1],
            TempHEL: temp[2],
            TempTOK: temp[3],
            DescriptionNY: description[0],
            DescriptionPAR: description[1],
            DescriptionHEL: description[2],
            DescriptionTOK: description[3],
          })
        } else {
          setTimeout(Rendering, 100)
        }
      }
      Rendering();
    })


    app.listen(process.env.PORT || 3000, () => {
      console.log("Server is currently runnnig on some port ¯\_(ツ)_/¯");
    })

    // for (var i = 0; i < city.length; i++) {
    //   url = "https://api.openweathermap.org/data/2.5/weather?q=" + city[i] + "&appid=f1231941a3a7d645b987724ca5d85de0&units=metric";
    //   https.get(url, (response) => {
    //     response.on("data", (data) => {
    //       weather[i] = JSON.parse(data);
    //       temp[i] = Math.round(weather[i].main.temp);
    //       description[i] = weather[i].weather[0].description;
    //     })
    //   })
    // }
    // res.render('index', {
    //       TempNY: temp[0],
    //       TempPAR: temp[1],
    //       TempHEL: temp[2],
    //       TempTOK: temp[3],
    //       DescriptionNY: description[0],
    //       DescriptionPAR: description[1],
    //       DescriptionHEL: description[2],
    //       DescriptionTOK: description[3],
    //     }

    // https.get(url, (resp) => {
    //   response.on("data", (data) => {
    //     weather[i] = JSON.parse(data);
    //     var temp[i] = Math.round(weather[i].main.temp);
    //     var description[i] = weather[i].weather[0].description;
    //     console.log(temp[i] + " " + description[i])
    //   })
    // })


    // response.on("data", (data) => {
    //   var data = JSON.parse(data);
    //
    // })
    //
    // weather[i].temp = Math.round(weather[i].main.temp);
    // weather[i].description = weather[i].weather[0].description;
    // res.render('index', {
    //  ETemp: temp,
    //  EDescription: description
    // });

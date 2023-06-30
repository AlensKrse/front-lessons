const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');


const urlParser = bodyParser.urlencoded({ extended: false });
const app = express();
const port = 3000;



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', urlParser, (req, res) => {
    const city = req.body.city;

    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=4bb6f529d1cac4ab77df7a8dfacd1200&units=metric";
    https.get(url, (weatherResponse) => {
        weatherResponse.on('data', (weatherData) => {
            const body = JSON.parse(weatherData);

            const description = body.weather[0].description;
            const temperature = body.main.temp;
            const icon = body.weather[0].icon;
            const imageUrl = "https://openweathermap.org/img/wn/"+icon + "@2x.png";
            
            res.write("<p>The weather is currently: " + description + "</p>")
            res.write("<h1>The temperature in " + city + " is " + temperature + " degrees Celsius</h1>")
            res.write("<img src=\"" + imageUrl + "\"/>")

            res.send();
        });


    });

});

app.listen(port, function () {
    console.log('listening on port ' + port);
});
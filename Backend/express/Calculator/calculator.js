const express = require('express');
const bodyParser = require('body-parser')


const app = express();
const port = 3000;

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/ui/index.html');
})

app.post('/', urlencodedParser, (req, res) => {
    let body = req.body;
    let result = Number(body.first_number) + Number(body.second_number);
    res.send("Result is " + result);
});

app.get('/bmi-calculator', (req, res) => {
    res.sendFile(__dirname + '/ui/bmi-calculator.html');
})

app.post('/bmi-calculator', urlencodedParser, (req, res) => {
    let weight =  parseFloat(req.body.weight);
    let height =  parseFloat(req.body.height);
    let result = weight / (height * 2);
    res.send("Your BMI rate is: " + result);
});

app.listen(port, function () {
    console.log("listening on port: " + port);
});
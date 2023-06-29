const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get("/contact", (req, res) => {
    res.send('My email is test@example.com');
});

app.get("/about", (req, res) => {
    res.send('My name is Test Testovich');
});

app.get("/hobbies", (req, res) => {
    res.send('<ul><li>Coffee</li><li>Games</li></ul>');
});



app.listen(port, () => {
    console.log(`Server app listening on port ${port}`);
  });


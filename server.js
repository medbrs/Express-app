const express = require('express');

const app = express();




let time = Date.now();
let date_ob = new Date(time);
let hours = date_ob.getHours();
console.log(hours);

app.get('/home', (req, res) => {
    if (hours < 8 && hours > 17) {
        res.sendFile(__dirname + '/public/error.html')
    } else {
        res.sendFile(__dirname + '/public/home.html')
    }
})

app.get('/contact', (req, res) => {
    if (hours < 8 && hours > 17) {
        res.sendFile(__dirname + '/public/error.html')
    } else {
        res.sendFile(__dirname + '/public/contact.html')
    }
})
app.get('/ourservices', (req, res) => {
    if (hours < 8 && hours > 17) {
        res.sendFile(__dirname + '/public/error.html')
    } else {
        res.sendFile(__dirname + '/public/ourservices.html')
    }
})



app.listen(3000, (err) => {
    if (err) {
        console.log('the server is not running')
    } else {
        console.log('the server 3000 is running')
    }
})
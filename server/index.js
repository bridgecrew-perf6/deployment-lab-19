// const { application } = require('express');
const port = 5500
const express = require('express');
const path = require('path');

require('dotenv').config()

const app = express();

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '455c442c1e004a7da665cb8219ac7aeb',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world!')

app.use(express.static(path.join(__dirname, '../public')))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.get("/styles", (req, res) => {
    res.SendFile(path.join(__dirname, '../public/index.css'));
})



app.listen(port, () => {
    console.log(`listening on ${port}`);
})
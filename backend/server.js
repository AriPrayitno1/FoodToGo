const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send("Tes Unit");
});

app.listen(port, ()=>{
    console.log("Tes Server");
});
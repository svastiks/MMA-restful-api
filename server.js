const express = require('express');

const app = express();

//Routes

app.get('/fighters', (req, res) =>{
    res.send("Hello API, yes");
})

app.get('/names', (req, res) =>{
    res.send("Names");
})

app.listen(3000, () => {
    console.log("UFC API is running on port 3000");
})
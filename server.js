const express = require('express');

const app = express();

require('dotenv').config();

const port = process.env.PORT;

app.use(express.json()); //Middleware so APP accepts JSON datatype

const Fighter = require('./models/fighterModel');

const mongoose = require('mongoose');

const uri = 'mongodb+srv://svastikAdmin:12345678Svastik@mmaapi.cgbdyde.mongodb.net/?retryWrites=true&w=majority';

app.get('/', (req, res) => {
    res.send("Hello UFC API")
})

app.post('/fighters', async (req, res) => {
    // console.log(req.body);
    // res.send(req.body);

    try {

        const fighters = await Fighter.create(req.body);
        res.status(200).json(fighters);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})

app.get('/fighters', async (req, res) => {
    try {

        const retrieveFighter = await Fighter.find({});
        res.status(200).json(retrieveFighter);

    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

mongoose.connect(uri)
    .then(() => {
        console.log('Connected to MongoDB Database')
        app.listen(port, () => {
            console.log("UFC API is active on port" + port)
        });
    }).catch((error) => {
        console.log(error)
    })


// import mongoose from 'mongoose';

//Routes

// app.get('/fighters', (req, res) => {
//     res.send("Hello API, yes");
// })






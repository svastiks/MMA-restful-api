const express = require('express');

const app = express();

const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://svastikAdmin:<12345678Svastik>@mmaapi.cgbdyde.mongodb.net/mmaApi?retryWrites=true&w=majority')
//     .then(() => { 

//         console.log('Connected to database!') }).catch((error) => {
//         console.log(error)
//     });

const uri = 'mongodb+srv://svastikAdmin:12345678Svastik@mmaapi.cgbdyde.mongodb.net/?retryWrites=true&w=majority';

async function connect() {

    try {
        await mongoose.connect(uri)
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log("UFC API is running on port 3000");
        })
        
    }
    catch (error) {
        console.error(error);
    }
}

connect();


// import mongoose from 'mongoose';

//Routes

app.get('/fighters', (req, res) => {
    res.send("Hello API, yes");
})

app.get('/names', (req, res) => {
    res.send(`
    {
        "First Name": "Conor",
        "Last Name": "McGregor",
        "Nickname": "The Notorious",
        "Height": "5' 9\"",
        "Weight": "155 lbs.",
        "Reach": "74.0\"",
        "Stance": "Southpaw",
        "Wins": 22,
        "Losses": 6,
        "Draws": 0,
        "youtube_highlights": "https://www.youtube.com/results?search_query=khabib+vs+conor"
      },
      {
        "First Name": "Khabib",
        "Last Name": "Nurmagomedov",
        "Nickname": "The Eagle",
        "Height": "5' 10\"",
        "Weight": "155 lbs.",
        "Reach": "70.0\"",
        "Stance": "Orthodox",
        "Wins": 29,
        "Losses": 0,
        "Draws": 0,
        "youtube_highlights": "https://www.youtube.com/results?search_query=khabib+vs+poirier"
      }
    
    `);
})




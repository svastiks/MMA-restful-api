const express = require('express');

const app = express();

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

app.listen(3000, () => {
    console.log("UFC API is running on port 3000");
})
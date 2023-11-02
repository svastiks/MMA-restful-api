const express = require('express');

const app = express();

const port = 3000;

//routes

app.get("/users", (req, res) => {

    const users = [
        {
            id: 1,
            name: "Simon",
        },
        {
            id: 2,
            name: "Brett",
        },
        {
            id: 3,
            name: "Random",
        },
    ];

    res.json(users);

});

//start

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
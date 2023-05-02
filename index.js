const express = require('express')
const app = express()

const port = 4567

app.get('/', (req, res) => {
    res.send("Hello")
})

app.get('/about', (req, res) => {
    res.send("I want to know this")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
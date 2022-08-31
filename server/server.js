const express = require('express');
const path = require('path');

const app = express();
//endpoints

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"))
})


const port = 4005;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
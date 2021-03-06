const express = require('express');
const path = require('path');
const port = process.env.PORT || 4020;


const app = express();

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html') );
});

// app.post('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './views/home.html') );
// });


app.listen(port, () => {
    console.log(`Listen into port ${port}`);
});
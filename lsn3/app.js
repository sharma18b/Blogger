const express = require('express');
const app = express();
// which view engine we are using we have to mention and default folder is automatically views
app.set('view engine','ejs');

app.listen(3000);
app.get('/',(req,res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/about',(req,res) => {
    res.sendFile(__dirname + '/views/about.html');
});
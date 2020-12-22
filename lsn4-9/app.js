const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const app = express();

// connecting with database
const dbURI = 'mongodb+srv://risharma18b:rishabh123@cluster0.kf8tu.mongodb.net/db1?retryWrites=true&w=majority';
mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true }).then((result) => app.listen(3000)).catch(err => console.log(err));

// which view engine we are using we have to mention and default folder is automatically views
app.set('view engine','ejs');


//middlerware using and using static files and making a folder public
app.use(express.static('public'));

app.get('/add-blog' , (req,res) => {
    const blog = new Blog( {
    title : 'test-title17',
    snippet : 'test-snippet',
    body : 'testbody boiiiiiiii',
    })
    blog.save().then((result) => {console.log('successfully saved boiiii'),res.send(result)}).catch((err) => {console.log(err)});
});



app.use(morgan('dev'));

//interaction with database and mongoose

//app.get('/all-blogs',(req,res) =>{
//    Blog.find().then((result) => {res.send(result);}).catch((err)=>{console.log(err);});
//});
//
//app.get('/single-blog',(req,res) => {
//    Blog.findById('5fe1b26086a7735524e42933').then((result) => {res.send(result)}).catch((err)=>{console.log(err);});
//});

//interaction part ended here

app.get('/',(req,res) => {
    res.redirect('/blogs');
});

app.get('/blogs',(req,res)=>{
    Blog.find().sort({createdAt : -1}).then((result) => {
        res.render('index',{title : 'hello', blogs : result});
    }).catch((err) => {console.log(err);});
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
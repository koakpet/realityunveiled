//require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');
// const mongoose = require('mongoose');


// Setup of Express
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


// Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/articlesDB");

// const articleSchema = new mongoose.Schema ({
  // title: String,
  // sub-title: String,
  // date: new Date(),
//   author: String,
//   article: String
// });

// const Article = mongoose.model("Article", articleSchema);

// const article = new Article ({
//   title: "My First Test",
//   author: "Kohly Akpet",
//   article: "This is me working very hard to get the database to connect to the app"
// });

// article.save();


// Routes
app.use('/', require('./routes/home'));
app.use('/blog', require('./routes/blog'));
app.use('/about', require('./routes/about'));
app.use('/article', require('./routes/article'));
app.use('/new', require('./routes/new'));


// Server
app.listen(process.env.PORT || 3000, function(req, res){
  console.log("Server is running on Port 3000");
});

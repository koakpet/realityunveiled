//require('dotenv').config();

// Dependencies Required
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');
const mongoose = require('mongoose');


// Setup of Express
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


// // Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/realityunveiledDB");

// // Mongoose Schema for the Collection Articles
// const articleSchema = new mongoose.Schema ({
//   title: String,
//   subTitle: String,
//   author: String,
//   date: Date,
//   publish: Boolean,
//   article: String
// });

// // Mongoose Model of Articles
// const Article = mongoose.model("Article", articleSchema);


// const post = {
//   topic: "Simple Nuggets to Boost your Spiritual Growth this Year",
//   date: "January 17, 2024",
//   author: "Urim Osagie",
//   article: "Most people see a new year as a clean slate, an opportunity to start over or make amends in order to achieve more than they did the previous year. In this blog post I will be focusing on simple things that you can do to create a conducive environment for your spiritual growth this year. I may not have a specific list of things you need to do that fit your exact situation, but I will be laying out several nuggets that could serve as guiding principles to help you accelerate in your growth in Christ this year."
// }

const posts = [
  {
    topic: "Simple Nuggets to Boost your Spiritual Growth this Year",
    date: "January 17, 2024",
    author: "Urim Osagie",
    article: "Most people see a new year as a clean slate, an opportunity to start over or make amends in order to achieve more than they did the previous year. In this blog post I will be focusing on simple things that you can do to create a conducive environment for your spiritual growth this year. I may not have a specific list of things you need to do that fit your exact situation, but I will be laying out several nuggets that could serve as guiding principles to help you accelerate in your growth in Christ this year."
  }
]





// ROUTES
// Routes Control for Blog Page
app.get('/blog', function(req,res){
  for(i=0; i < posts.length; i++){
    res.render('blog', {posts: posts});
  }
});

app.get('/posts/:postName', function(req,res){
  for (i=0; i < posts.length; i++) {
    if (_.lowerCase(posts[i].topic) === _.lowerCase(req.params.postName)) {
      console.log("Match found");
    } else console.log("Match not found");
  }
  
});

// Route Control for Articles Page
app.get('/article', function(req, res){
  
  
  // var search = Article.findOne({ title });

  // console.log(search);

  // res.render('article', {topic: post.topic, date: post.date, author: post.author, article: post.article});
})



// Routes Control for New Post
app.get('/new', function(req, res){
  res.render('new');
});

app.post('/new', function(req, res){
  // const article = new Article ({
  //   title: req.body.title,
  //   author: req.body.author,
  //   date: new Date(),
  //   article: req.body.post
  // });

  // article.save();

  // console.log('Post successfully saved to db');
  
  const post ={
    topic: req.body.title,
    author: req.body.author,
    article: req.body.post
  }

  posts.push(post);

  res.redirect("/blog");
});











// // Routes
app.use('/', require('./routes/home'));
// app.use('/blog', require('./routes/blog'));
app.use('/about', require('./routes/about'));
// app.use('/article', require('./routes/article'));
// app.use('/new', require('./routes/new'));


// Server
app.listen(process.env.PORT || 3000, function(req, res){
  console.log("Server is running on Port 3000");
});

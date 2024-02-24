const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const post = {
  title: "Simple Nuggets to Boost your Spiritual Growth this Year",
  date: "January 17, 2024",
  author: "Urim Osagie",
  article: "Most people see a new year as a clean slate, an opportunity to start over or make amends in order to achieve more than they did the previous year. In this blog post I will be focusing on simple things that you can do to create a conducive environment for your spiritual growth this year. I may not have a specific list of things you need to do that fit your exact situation, but I will be laying out several nuggets that could serve as guiding principles to help you accelerate in your growth in Christ this year."
}
  
// // Mongoose Schema for Collections Article
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



// Routes
router.get('', function(req,res){

  Article.find({}), function(err, results) {
    console.log(results);
  }

    res.render('article', {title: post.title, date: post.date, author: post.author, article: post.article});
  });


module.exports = router;
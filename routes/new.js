const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

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
router.get('', function(req, res){
    res.render('new');
  });

router.post('', function(req, res){
  
  // var title = req.body.title;
  // var author = req.body.author;
  // var post = req.body.post;
  
  const article = new Article ({
    title: req.body.title,
    author: req.body.author,
    date: new Date(),
    article: req.body.post
  });

  article.save();

  console.log("Successfully added post to database");
});


module.exports = router;
const express = require('express');
const router = express.Router();


// Routes
router.get('', function(req, res){
    res.render('new');
  });

  router.post('', function(req, res){
    var title = req.body.title;
    var author = req.body.author;
    var post = req.body.post;

    console.log("Find below " + title + " written by " + author + "; " + post);
  })


module.exports = router;
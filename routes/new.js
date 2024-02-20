const express = require('express');
const router = express.Router();


// Routes
router.get('', function(req,res){
    res.render('new');
  });


module.exports = router;
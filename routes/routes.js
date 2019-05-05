var express = require('express');
var router = express.Router();

/* express */
router.get('/', function(req, res){
    res.send('this is the homepage');
});

router.get('/contact', function(req, res){
    res.send('this is contact page');
});

router.get('/profile/:id', function(req,res){
    res.send(`you requested to see a profile id of ${req.params.id}`);
});

module.exports = router;
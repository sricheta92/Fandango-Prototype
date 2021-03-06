var express = require('express');
var router = express.Router();
var kafka = require('./kafka/client');



router.post('/', function(req, res, next) {
    //add movie_hall_id too??
    console.log(req);
    payload = {
        action:"billing",
        type:"add_bill",
        bill: req.body
    }
    kafka.make_request('requestTopic',payload, function(err,results){
        console.log('in billing result');
        console.log(results);
        if(err){
            throw err;
        }
        else
        {
            console.log(results);
            res.send(results);   
        }
    });
   
   
  
});

router.get('/:billID', function(req,res){
    payload = {
        action:"billing",
        type:"get_bill",
        bill_id:req.params.billID
    }
    kafka.make_request('requestTopic',payload, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            throw err;
        }
        else
        {
            console.log(results);
            res.send(results);   
        }
    }); 
});

router.get('/get-all-purchases/:userID',function(req,res){
    payload = {
        action:"billing",
        type:"get_all_purchases",
        user_id:req.params.userID
    }
    kafka.make_request('requestTopic',payload, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            throw err;
        }
        else
        {
            console.log(results);
            res.send(results);   
        }
    }); 
});

module.exports = router;

var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set("view engine", "ejs");

app.get("/",function(req,res){
    res.render("index"); 
});

app.post("/search", function(req, res){
    var query = req.body.query;
    var url = "http://www.omdbapi.com/?s=" + query;
    
    request(url,function(error, response, body) {
       if(!error && response.statusCode === 200) {
           var data = JSON.parse(response.body);
        //   console.log(data);
           res.render("partials/search", {data: data});
       } 
    });
    
    
});




app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Server Started"); 
});

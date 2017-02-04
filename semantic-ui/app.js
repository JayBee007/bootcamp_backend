var express = require("express");
var app = express();

app.use(express.static('public'));

app.get("/", function(req,res){
   res.render("index.ejs"); 
});

app.get("/about", function(req,res){
   res.render("about.ejs"); 
});

app.get("/portfolio", function(req,res){
   res.render("portfolio.ejs"); 
});

app.get("/contact", function(req,res){
   res.render("contact.ejs"); 
});



app.listen(process.env.PORT, process.env.IP, function() {
   console.log("serving"); 
});
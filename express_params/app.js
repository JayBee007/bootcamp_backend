var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Hi there, welcome to my assignment!"); 
});

app.get("/speak/pig", function(req,res){
   res.send("The pig says 'Oink'"); 
}); 

app.get("/speak/cow", function(req,res){
   res.send("The pig says 'Moo'"); 
}); 

app.get("/speak/dog", function(req,res){
   res.send("The dog says 'Woof Woof!'"); 
});

app.get("/repeat/:word/:num", function(req,res){
   var word = req.params.word;
   var num = req.params.num;
   var result = "";
   for(var i = 0; i< num;i++){
       result += word + " ";
   }
   
   res.send(result);
});






app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
});
var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Hi there, welcome to my assignment!"); 
});

app.get("/speak/:animal", function(req,res){
   var animal = req.params.animal.toLowerCase();
   var sounds = {
      pig: "Oink",
      cow: "Moo",
      dog: "Woof Woof!"
   };
   res.send(`The ${animal} says ${sounds[animal]}`); 
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
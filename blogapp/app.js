var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blogapp");

var blogSchema = mongoose.Schema({
   title:String,
   image:String,
   body:String,
   created: {type:Date, default: Date.now}
});

var Blog = mongoose.model("blog", blogSchema);

Blog.create({
   title: "Blog Title",
   image: "https://farm6.staticflickr.com/5601/14986371364_0db6f0aeb2.jpg",
   body: "Lorem ipusm dolor amit and something else"
});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));









app.listen(process.env.PORT, process.env.IP, function(){
   console.log("blog app server running"); 
});



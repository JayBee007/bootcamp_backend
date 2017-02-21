var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect("mongodb://localhost/blogapp");

var blogSchema = mongoose.Schema({
   title:String,
   image:String,
   body:String,
   created: {type:Date, default: Date.now}
});

var Blog = mongoose.model("blog", blogSchema);

//RESTful Routes
app.get("/", function(req,res){
   res.redirect("/blogs"); 
});
app.get("/blogs", function(req,res){
   Blog.find({}, function(err, result){
      if(err){
          console.log(err);
      }else {
            res.render("index", {blogs: result});        
      }
   });
   
});

// New Route
app.get("/blogs/new", function(req,res){
   res.render("new");
});

// Create Route
app.post("/blogs", function(req,res){
   //create blog
   Blog.create(req.body.blog, function(err, newBlog){
      if(err){
         res.render("new");
      }else {
         // then redirect to blogs
         res.redirect("/blogs");
      }
   });
});








app.listen(process.env.PORT, process.env.IP, function(){
   console.log("blog app server running"); 
});



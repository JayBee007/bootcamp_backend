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

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));









app.listen(process.env.PORT, process.env.IP, function(){
   console.log("blog app server running"); 
});



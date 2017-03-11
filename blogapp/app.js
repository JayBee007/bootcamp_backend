var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");

app.use(methodOverride('_method'))
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));



mongoose.connect("mongodb://localhost/blogapp");

var blogSchema = new mongoose.Schema({
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

// Show Route

app.get("/blogs/:id", function(req, res){
   
   Blog.findById(req.params.id, function(err, foundBlog){
      if(err){
         res.redirect("/blogs");
      }else {
         res.render("show", {blog: foundBlog});
      }
   });
});

// Update Route
app.get("/blogs/:id/edit", function(req,res){
   Blog.findById(req.params.id,function(err,foundBlog){
      if(err){
         res.redirect("/blogs/:id");
      }else {
         res.render("edit", {blog:foundBlog});
      }
   });
});

app.put("/blogs/:id/",function(req,res){
   Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
      if(err){
         res.redirect("/blogs");
      }else{
         res.redirect("/blogs/" + req.params.id);
      }
   });
});

// Delete Route
app.delete("/blogs/:id", function(req,res){
   res.send("delete route");
});




app.listen(process.env.PORT, process.env.IP, function(){
   console.log("blog app server running"); 
});



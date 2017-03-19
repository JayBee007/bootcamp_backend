var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

// User - email, name
var userSchema = new mongoose.Schema({
    email:String,
    name:String
});
    
var User = mongoose.model("User", userSchema);





// Post - title, content
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_reference");

// Post - title, content
var postSchema = new mongoose.Schema({
   title:String,
   content:String
});

var Post = mongoose.model("Post", postSchema);

// User - email, name
var userSchema = new mongoose.Schema({
    email:String,
    name:String,
    posts:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Post"
            }
        ]
});
    
var User = mongoose.model("User", userSchema);

// Post.create({
//   title:"How to cook  burger",
//   content:"Kitty power! i tell my human for hide from vacuum cleaner or kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Please stop looking at your phone and pet me meow for food, then when human fills food dish, take a few bites of food and continue meowing hide when guests come over hate dog. Intrigued by the shower cats go for world domination refuse to drink water except out of someone's glass purrrrrr wake up human for food at 4am lick yarn hanging out of own butt. Scream for no reason at 4 am."
// }, function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         User.findOne({email: "bob@gmail.com"}, function(err,foundUser){
//           if(err){
//               console.log(err);
//           }else {
//               foundUser.posts.push(post);
//               foundUser.save(function(err,data){
//                   if(err){
//                       console.log(err);
//                   }else {
//                       console.log(data);
//                   }
//               })
//           }
//         });
//     }
// });

// Find user
// Find all posts for that user

User.findOne({email:"bob@gmail.com"}).populate("posts").exec(function(err,user){
   if(err){
       console.log(err);
   }else {
       console.log(user);
   }
});


// User.create({
//   email: "bob@gmail.com",
//   name: "Bob Belcher"
// });
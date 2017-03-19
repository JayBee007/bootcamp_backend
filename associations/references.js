var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_reference");

var Post = require("./models/post");

var User = require("./models/user");

Post.create({
  title:"How to cook",
  content:"Kitty power! chase the red dot, hairball run catnip eat the grass sniff. Please stop looking at your phone and pet me meow for food, then when human fills food dish, take a few bites of food and continue meowing hide when guests come over hate dog. Intrigued by the shower cats go for world domination refuse to drink water except out of someone's glass purrrrrr wake up human for food at 4am lick yarn hanging out of own butt. Scream for no reason at 4 am."
}, function(err, post){
    if(err){
        console.log(err);
    }else{
        User.findOne({email: "bob@gmail.com"}, function(err,foundUser){
          if(err){
              console.log(err);
          }else {
              foundUser.posts.push(post);
              foundUser.save(function(err,data){
                  if(err){
                      console.log(err);
                  }else {
                      console.log(data);
                  }
              })
          }
        });
    }
});

// Find user
// Find all posts for that user

// User.findOne({email:"bob@gmail.com"}).populate("posts").exec(function(err,user){
//   if(err){
//       console.log(err);
//   }else {
//       console.log(user);
//   }
// });


// User.create({
//   email: "bob@gmail.com",
//   name: "Bob Belcher"
// });
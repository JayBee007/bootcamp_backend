var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// add item to databse
// var george = new Cat({
//     name: "George",
//     age:11,
//     temperament: "Grouchy"
// });

// george.save(function(err, item) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("cat saved");
//         console.log(item);

//     }
// });


// retrieve item from database and console.log each one
Cat.find({}, function(err, results) {
    if (err) {
        console.log(err);
    }
    else{
        console.log(results);
    }

});





















// Import express, mongoose and person model
const express = require("express");
const monogoose = require("mongoose");
const Person = require("./Models/Person");
// .env
require("dotenv").config();
// initialise the app
const app = express();

monogoose.connect(process.env.MONGODB_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = monogoose.connection; // Connect to the db

db.once("open", () => {
    console.log("connected to database!");
});

// Create and Save a Record of a Model
// Create record person using the person model and save it to the database
let person = new Person({
    name: "Fatima Zohra",
    age: 28,
    favoriteFoods: ["dark chocolate", "green food", "smothies"],
});

// person
//     .save()
//     .then((doc) => {
//         console.log(doc);
//     })
//     .catch((err) => console.error(err));

// Create Many Records with model.create()
// Array of People
let arrayOfPeople = [
    {
        name: "Mary",
        age: 28,
        favoriteFoods: ["dark chocolate", "green food", "smothies"],
    },
    {
        name: "Houda",
        age: 15,
        favoriteFoods: ["Chips", "Cack", "Soupe"],
    },
    { name: "Salima", age: 24, favoriteFoods: ["Tous"] },
];

// Add the array to the database using Person.create 
Person.create(arrayOfPeople, (err, data) => {
    if (err) {
        Person(err);
    }
    Person(data);
})

// Use Paerson.find() to Search on Database, all person
Person
    .find()
    .then((doc) => {
        console.log(doc);
    })
    .catch((err) => console.error(err));


// Use model.findOne() to Return a Single Matching Document from  Database using the food argument

// Person
//     .findOne({ favoriteFoods: 'green food' })
//     .then((doc) => {
//         console.log(doc);
//     })
//     .catch((err) => console.error(err));



// Use model.findById() to Search Your Database By _id

// Person
//     .findById({ _id: '5fef6670320a15441ead49f7' })
//     .then((doc) => {
//         console.log(doc);
//     })
//     .catch((err) => console.error(err));



// Perform Classic Updates by Running Find, Edit, then Save
// Person
//     .findById({ _id: '5fef6670320a15441ead49f7' })
//     .then((doc) => {
//         doc.favoriteFoods.push("hamburger")
//         doc.save();
//         console.log(doc);
//     })
//     .catch((err) => console.error(err));



// Perform New Updates on a Document Using model.findOneAndUpdate()

// Person
//     .remove({ name: 'Fatima Zohra' }, { age: 20 }, { new: true })
//     .then((doc) => {
//         doc.save();
//         console.log(doc);
//     })
//     .catch((err) => console.error(err));



// Delete One Document Using model.findByIdAndRemove

// Person
//     .findByIdAndRemove({ _id: '5fef6ff0932e905281c4dead' })
//     .then((doc) => {
//         console.log(doc);
//     })
//     .catch((err) => console.error(err));


// MongoDB and Mongoose - Delete Many Documents with model.remove() with name Mary

// Person
//     .remove({ name: 'Mary' })
//     .then((doc) => {
//         console.log(doc);
//     })
//     .catch((err) => console.error(err));
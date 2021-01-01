

//---------------- Create person schema and export the model --------------------//

// Import mongoose after $npm install mongoose
const mongoose = require('mongoose');
// Create a new schema using mongoose
const Schema = mongoose.Schema;

//  Defines the shape of the documents within person collection
const personSchema = new Schema({
    name: {
        type: String,
        required: true,// must have name
    },
    age: {
        type: Number,
    }
    ,
    favoriteFoods: {
        type: [String], // Array of string
    }
})

// Create collection using person Schema
const Person = mongoose.model("Person", personSchema);

// Export the collection model 
module.exports = Person;
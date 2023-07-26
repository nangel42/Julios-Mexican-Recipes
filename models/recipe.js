// Require the Mongoose package
const mongoose = require('mongoose');

// Create a schema to define the properties of the pets collection
const recipeSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    description: {
        type: String, 
        required: true  
    },
    ingredients: {
        type: String, 
        required: true 
    },
    instructions: {
        type: String, 
        required: true 
    },
    picture: { 
        type: String, 
        default: "https://www.shutterstock.com/image-vector/default-image-icon-vector-missing-260nw-2086941550.jpg", 
    },
    foodType: {
        type: String,
        enum: ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack', 'Drink', 'Other']
    },
    isFeatured: { 
        type: Boolean, 
        default: false 
    },
    dateAdded: { 
        type: Date, 
        default: Date.now 
    },

});

// Export the schema as a Monogoose model. 
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model('Recipe', recipeSchema);
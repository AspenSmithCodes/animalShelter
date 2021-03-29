const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
	name: {
        type: String,
        required: [true, "Pet Name is required"],
        minlength: [3,"must be at least 3 characters"],
        message: "must be at least 3 characters",
        unique: true
    },
	type: {
        type: String,
        required: [true, " Pet Name is required"],
        minlength: [3,"must be at least 3 characters"] 

    },
	description: {
        type: String,
        required: [true, " Pet Name is required"],
        minlength: [3,"must be at least 3 characters"] 

    },
	skill_1: {
        type: String,
        
    },
	skill_2: {
        type: String,
       

    },
	skill_3: {
        type: String,
        

    },
    
    
	
});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;
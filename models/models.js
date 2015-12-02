var mongoose = require("mongoose");

var ContactModel = mongoose.model("contact", new mongoose.Schema({
// new_user
    name:{
        first: String,
        last: String
    },
    github: String,
    linkedin: String,
    email: {
        type: String,
        unique: true,
        required: true
    }
}));

module.exports = {
    ContactModel: ContactModel
};
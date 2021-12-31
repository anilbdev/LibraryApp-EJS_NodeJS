const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://anil:3131@sandbox.h6dob.mongodb.net/ictLibrary?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const AuthorSchema = new Schema({
    title: String,
    image: String,
    about: String
});
const authordata = mongoose.model('authordata', AuthorSchema);
module.exports = authordata;
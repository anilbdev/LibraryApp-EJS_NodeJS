const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://anil:3131@sandbox.h6dob.mongodb.net/ictLibrary?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    title: String,
    author: String,
    image: String,
    about: String
});
const bookdata = mongoose.model('bookdata', BookSchema);
module.exports = bookdata;
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const bookSchema = new mongoose.Schema({
    name: String,
    author: { type: mongoose.Types.ObjectId, ref: "User" }
});

bookSchema.index({ name: 1 }); // Create an index on the name field

bookSchema.plugin(mongoosePaginate); // Enable pagination

const Book = mongoose.model('Books', bookSchema);

module.exports = Book;
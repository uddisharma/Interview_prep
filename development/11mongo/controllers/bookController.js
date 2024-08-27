const Book = require('../models/bookModel');

const addBook = async (req, res) => {
    const { name, author } = req.body;
    const book = new Book({ name, author });
    try {
        await book.save();
        res.send('Book added successfully');
    } catch (error) {
        res.send(error);
    }
}

const getBooks = async (req, res) => {
    const { page = 1, limit = 10, sort = 'name', sortDirection = 'asc', search } = req.query;

    try {
        const options = {
            page: Math.max(parseInt(page), 1),
            limit: Math.max(parseInt(limit), 1),
            sort: { [sort]: sortDirection === 'desc' ? -1 : 1 },
            populate: { path: 'author', select: 'name' } // populate the author field
        };

        const query = {};
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { author: { $regex: search, $options: 'i' } }
            ];
        }

        const books = await Book.paginate(query, options);
        res.json(books);

    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { addBook, getBooks };
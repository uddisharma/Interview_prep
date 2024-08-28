const mongoose = require('mongoose');
const User = require('../models/userModel');
const Book = require('../models/bookModel');


const startTransaction = async (req, res) => {
    const { name, email, age, bookname } = req.body;
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const user = new User({
            name,
            email,
            age,
            isActive: true,
        });

        const book = new Book({
            title: bookname,
            author: user._id,
        });

        await user.save({ session });
        await book.save({ session });

        await session.commitTransaction();

        res.send('Transaction committed successfully');

    } catch (error) {

        await session.abortTransaction();
        res.send('Transaction aborted:', error);

    } finally {

        session.endSession();
        mongoose.connection.close();
    }
}

module.exports = { startTransaction };


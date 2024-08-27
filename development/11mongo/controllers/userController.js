const User = require('../models/userModel');

// Inserting

const addUser = async (req, res) => {
    const { name, email } = req.body;
    const user = new User({ name, email });
    try {
        await user.save();
        res.send('User added successfully');
    } catch (error) {
        res.send(error);
    }
}

const addMultipleUsers = async (req, res) => {
    const users = req.body;
    try {
        await User.insertMany(users);
        res.send('Users added successfully');
    } catch (error) {
        res.send(error);
    }
}

// <------------------------------------------------------------>

// Fetching

const getUsers = async (req, res) => {
    const { page = 1, limit = 10, sort = 'name', sortDirection = 'asc', search } = req.query;

    try {
        const options = {
            page: Math.max(parseInt(page), 1),
            limit: Math.max(parseInt(limit), 1),
            sort: { [sort]: sortDirection === 'desc' ? -1 : 1 }
        };

        const query = {};
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } }
            ];
        }

        const users = await User.paginate(query, options);
        res.json(users);

    } catch (error) {
        res.status(500).send(error.message);
    }
};


const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.send(error);
    }
}

// using Indexing

const getUserByEmail = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email });
        res.json(user);
    } catch (error) {
        res.send(error);
    }
}


// <------------------------------------------------------------>

// Updating

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(user);
    } catch (error) {
        res.send(error);
    }
}

const updateAll = async (req, res) => {
    try {
        const user = await User.updateMany({}, req.body, { new: true });
        res.json(user);
    } catch (error) {
        res.send(error);
    }
}

// <------------------------------------------------------------>

// Deleting

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.json(user);
    } catch (error) {
        res.send(error);
    }
}

module.exports = { addUser, getUsers, getUserById, getUserByEmail, addMultipleUsers, updateUser, updateAll, deleteUser }
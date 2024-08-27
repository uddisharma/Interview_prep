const User = require('../models/userModel');
const Books = require('../models/bookModel');

const getActiveUsers = async (req, res) => {
    try {
        const data = await User.aggregate([
            {
                $group: {     // first stage // group by isActive
                    _id: "$isActive",
                    count: { $sum: 1 },
                },
                // result -> { _id: true, count: 2 }, { _id: false, count: 1 }
            },
        ]);
        res.json(data)

    } catch (error) {
        res.send(error)
    }
}

const getAverageAge = async (req, res) => {
    try {
        const data = await User.aggregate([
            {
                $group: {     // first stage // group by null
                    _id: null,
                    averageAge: { $avg: "$age" },
                },

            },
        ]);
        res.json(data)

    } catch (error) {
        res.send(error)
    }
}

const SumOfAge = async (req, res) => {
    try {

        const data = await User.aggregate([
            {                                // first stage

                $group: {
                    _id: "$isActive",
                    totalAge: { $sum: "$age" }
                }

            },

            // first stage data will pass to second stage in the form of { _id: true, totalAge: 14 }, { _id: false, totalAge: 10 }

            {                               // second stage

                $sort: { totalAge: req.query.sort === "asc" ? 1 : -1 }

            },

            {                             // third stage
                $limit: 2
            }

        ])

        res.json(data)

    } catch (error) {
        res.send(error)
    }
}


// <------------------------------------->

const getBooksWithAuthor = async (req, res) => {
    try {
        const data = await Books.aggregate([
            {
                $lookup: {
                    from: "Users", 
                    localField: "author",
                    foreignField: "_id",
                    as: "authorDetails",
                }
            }
            // {
            //     $unwind: "$authorDetails" 
            // }
        ]);
        res.json(data);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = { getActiveUsers, getAverageAge, SumOfAge, getBooksWithAuthor }
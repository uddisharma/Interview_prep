const express = require('express');
const { getActiveUsers, getAverageAge, SumOfAge, getBooksWithAuthor } = require('../controllers/aggregationController');
const router = express.Router();

router.get("/active-users", getActiveUsers);
router.get("/average-age", getAverageAge);
router.get("/sum-of-age", SumOfAge);

// <---------------------->

router.get("/book-with-author", getBooksWithAuthor)

module.exports = router
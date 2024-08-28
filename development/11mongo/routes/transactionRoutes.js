const express = require('express');
const { startTransaction } = require('../controllers/transactionController');
const router = express.Router();

router.post("/start-transaction", startTransaction)

module.exports = router

const express = require('express');
const connectDB = require("./db")
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = 3000;
const userRouter = require("./routes/userRoute")
const bookRouter = require("./routes/bookRoute")
const aggregateRouter = require("./routes/aggregateRoute")
const transactionRouter = require("./routes/transactionRoutes")
app.use(express.json());


connectDB();

app.use(userRouter)
app.use(bookRouter)
app.use(aggregateRouter)
app.use(transactionRouter)

app.get('/', (req, res) => {
    res.send('Health ok !');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
import express from 'express';

const app = express();

import PostRouter from './routes/PostRoute'
import UserRouter from './routes/UserRoute'


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Health ok' + " " + new Date());
});

app.use(PostRouter)
app.use(UserRouter)


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
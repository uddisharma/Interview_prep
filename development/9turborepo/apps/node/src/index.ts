import express from 'express'
import cors from 'cors'
import { signUpSchema } from '@repo/common/config'
import { prisma } from "@repo/prisma";

const app = express()

app.use(express.json())
app.use(cors({
    origin: "*"
}))


app.get('/', (req, res) => {
    res.send('Health check')
})

app.post('/zod-check', async (req, res) => {

    const data = signUpSchema.safeParse(req.body)

    if (data?.success) {
        await prisma.user.create({
            data: {
                email: data.data.email,
                name: data.data.name
            }
        })
        res.json({
            msg: "success",
            data: data
        })
    } else {
        res.json({
            msg: "invalid data format",
            data: req.body
        })
    }

})

app.listen(5000, () => {
    console.log('Example app listening on port 5000!')
})
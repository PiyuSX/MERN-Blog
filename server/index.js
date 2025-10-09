import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT


app.get('/', (req, res) => {
    res.json({
        message: "Hello from Server Api"
    })
})

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})

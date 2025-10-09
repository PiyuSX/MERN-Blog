import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRoutes from './routes/auth.route.js'

dotenv.config()
connectDB()

const app = express()
const PORT = process.env.PORT
//Middleware
app.use(express.json())

//Routes
app.use('/api/v1/auth', authRoutes)


app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})

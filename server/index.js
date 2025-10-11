import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRoutes from './routes/auth.route.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config()
connectDB()

const app = express()
const PORT = process.env.PORT
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
}
//Middleware
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

//Routes
app.use('/api/v1/auth', authRoutes)


app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})

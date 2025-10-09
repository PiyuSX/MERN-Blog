//Help me Copilot 
import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'
import bcrypt from 'bcrypt'

//Register a user

export const signup = async (req, res)=> {
    const { username, email, password} = req.body
    try {
        if(!username || !email || !password) {
            return res.status(400).json({message: "All fields are required"})
        }
    const existingUser = await User.findOne({email})
    if(existingUser) {
        return res.status(400).json({message: "User already exists"})
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = {
        username,
        email,
        password: hashedPassword
    }
    await User.create(newUser)
    res.status(201).json({message: "User created successfully"})

    } catch (error) {
        res.status(500).json({message: "Internal server error"})
    }
} 
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
    const existingUsername = await User.findOne({username})
    if(existingUsername) {
        return res.status(400).json({message: "Username already taken"})
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


//Login a user

export const signin = async (req, res)=> {
    const { email, password } = req.body
    try {
        if(!email || !password) {
           return res.status(400).json({message: "All fields are required"})
        }
        const validUser = await User.findOne({ email })
        if(!validUser) {
            return res.status(400).json({ message: "Invalid credentials"})
        }
        const isPasswordValid = await bcrypt.compare(password, validUser.password)
        if(!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials"})
        }
        const token = jwt.sign({ id: validUser._id,}, process.env.JWT_SECRET, {expiresIn: '1d'})
        
        const { password: userPassword, ...userData } = validUser.toObject()

        res.status(200).cookie('access_token', token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000, 
        }).json(
            { message: "Login successful",  user: userData}
        )
        

    } catch (error) {
        res.status(500).json({message: "Internal server error"})
    }
}
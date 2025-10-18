import express from 'express'
import authUser from '../middleware/authuser.js'
import { updateUserProfile } from '../controllers/user.controller.js'



const router = express.Router()

//update user Profile
router.put('/update/:userId', authUser, updateUserProfile)

export default router
import express from 'express'
import authUser from '../middleware/authuser.js'
import { updateUserProfile, deleteUserProfile } from '../controllers/user.controller.js'



const router = express.Router()

//update user Profile
router.put('/update/:userId', authUser, updateUserProfile)
router.delete('/delete/:userId', authUser, deleteUserProfile )

export default router
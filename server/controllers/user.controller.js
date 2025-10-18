import User from "../models/user.model.js"
import bcrypt from "bcrypt"


export const updateUserProfile = async (req, res)=> {
    const { userId } = req.params
    const { username, email, password, imgURL } = req.body

    try {
        //Finding User by Id
       if(req.userId !== userId){
           return res.status(403).json({ message: "You are not authorized to update this profile" })
       }
       const updatedUser = {
            username,
            email,
            imgURL
       }
       if (password) {
            const hashedPassword = await bcrypt.hash(password, 10)
            updatedUser.password = hashedPassword
       }
       
       const user = await User.findByIdAndUpdate(userId, {
              $set: {
                    ...updatedUser
              }
       }, { new: true })

       const newUserData = await User.findById(userId)
       const { password: userPassword, ...userData } = newUserData.toObject();
         res.status(200).json({ message: "Profile updated successfully", user: userData })
    }catch (error) {
        return res.status(500).json({ message: "Internal Server Error" })
    }
}
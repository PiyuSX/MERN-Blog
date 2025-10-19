import axios from "axios"
import { toast } from "react-hot-toast"
import useUserStore from "../store/userStore.js"
import { useNavigate } from "react-router-dom"

const useSignout = () => {
  const { clearUser } = useUserStore()
  const navigate = useNavigate()

  const signout = async () => {
    try {
      const res = await axios.post('/api/v1/user/signout', {}, {
        withCredentials: true,
      })
      toast.success(res.data.message)
      clearUser()
      navigate('/signin')
    } catch (error) {
      toast.error(error.response?.data?.message || "Sign out failed")
    }
  }

  return { signout }
}

export default useSignout

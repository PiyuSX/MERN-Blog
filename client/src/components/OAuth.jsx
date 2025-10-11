import { FcGoogle } from "react-icons/fc"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import app from "../../firebase.js"
import axios from "axios"
import { toast } from "react-hot-toast"
import useUserStore from "../store/userStore.js"
import { useNavigate } from 'react-router-dom'


const OAuth = () => {
  const { setUser } = useUserStore();
  const navigate = useNavigate()
  const handleGoogleClick = async () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({ prompt: 'select_account' })
    try {
      const resultFromGoogle = await signInWithPopup(auth, provider)

      const userData = {
        name: resultFromGoogle.user.displayName,
        email: resultFromGoogle.user.email,
        imgURL: resultFromGoogle.user.photoURL,
      }

      //Sending data to Our Express Server
      const res = await axios.post("/api/v1/auth/google", userData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      toast.success(res.data.message)
      setUser(res.data.user)
      navigate('/')

    } catch (error) {
      toast.error(error.response?.data?.message || "Could not authorize with Google")
    }

  }
  return (
    <button onClick={handleGoogleClick} className="cursor-pointer flex w-full justify-center items-center bg-[var(--bg-primary)] border border-[var(--border-colour)] p-2 rounded text-[var(--text-colour)] mt-2">
        <FcGoogle className="h-5 w-5 mr-2" /> Continue with Google
    </button>
  )
}

export default OAuth
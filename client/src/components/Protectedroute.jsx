import useUserStore from "../store/userStore.js"
import { Outlet, Navigate } from "react-router-dom"


const Protectedroute = () => {
    const { user } = useUserStore()
  return user ? <Outlet /> : <Navigate to={'/signin'} />
}

export default Protectedroute

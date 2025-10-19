import axios from "axios"
import useUserStore from "../store/userStore";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Deleteuserpop = ({ setIsDeletePopOpen }) => {
    const { user, clearUser } = useUserStore();
    const navigate = useNavigate();

    const handleAccountDelete = async () => {
        //Closing the popup for better UX
        setIsDeletePopOpen(false);
        try {
            const res = await axios.delete(`/api/v1/user/delete/${user._id}`, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            })
            toast.success(res.data.message)
            clearUser()
            navigate('/signin')
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong")   
        }

        
    }
    const handleCancel = () => {
        setIsDeletePopOpen(false);
    }

  return (
    <div className='border shadow-2xl rounded absolute bg-[var(--bg-colour)] p-8 border-[var(--border-colour)] top-1/3 '>
        <span className=''>Are you sure you want to delete your account ?</span>
        <div className='flex gap-10 m-4'>
            <button onClick={handleCancel} className='bg-green-500 text-[var(--bg-colour)] p-2 rounded hover:bg-green-600 transition w-full'>Cancel</button>
            <button onClick={handleAccountDelete} className='bg-red-500 text-white p-2 rounded hover:bg-red-600 transition w-full'>Confirm</button>
        </div>
    </div>
  )
}

export default Deleteuserpop
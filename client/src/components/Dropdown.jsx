import useUserStore from "../store/userStore.js"
import { Link } from "react-router-dom"
import useSignout from "../hooks/useSignout.js"

const Dropdown = ({setIsUserDropdownOpen}) => {
    const { user } = useUserStore();
    const { signout } = useSignout();

  return (
    <div className="text-[var(--text-colour)] absolute right-12 top-18 bg-[var(--bg-colour)] border border-[var(--border-colour)] rounded p-3 " >
        <div className="text-sm font-semibold border-b border-[var(--border-colour)] mb-2 pb-2 flex flex-col gap-1">
            <p>@{user.username}</p>
            <p>{user.email}</p>
        </div>
        <div onClick={() => setIsUserDropdownOpen(false)} className="flex flex-col text-sm">
            <Link className=" hover:border border-[var(--border-colour)] p-1 rounded hover:bg-gray-100 hover:dark:bg-slate-900" to={'/dashboard?tab=profile'}>Profile</Link>
            <Link onClick={signout} className="text-red-500 hover:border border-[var(--border-colour)] p-1 rounded hover:bg-gray-100 hover:dark:bg-slate-900">Sign Out</Link>
        </div>
    </div>
  )
}

export default Dropdown
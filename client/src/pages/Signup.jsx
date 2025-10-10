import { Link } from "react-router-dom"
import Highlighter from "../components/Highlighter"
import useThemeStore from "../store/themeStore"
import { useForm } from "react-hook-form"
import axios from "axios"
import { toast } from "react-hot-toast"

const Signup = () => {
  const { isDarkMode } = useThemeStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm()

    const onSubmit = async (data) => {
        try {
            const res = await axios.post('/api/v1/auth/signup', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
                
            })
            toast.success(res.data.message)
            reset() 
        } catch (error) {
            toast.error(error.response?.data?.message || 'Something went wrong')
        }
    }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 bg-[var(--bg-colour)] justify-center items-center h-[91.7vh]">
      {/* Section 1 */}
      <div className="hidden mx-10 md:flex md:justify-center md:items-center gap-10">
        <img className="w-1/2" src="guy.svg" alt="Hello Guy's" />
        {/* This is the Highliter Section */}
        <p className="text-[var(--text-colour)] text-lg md:text-xl lg:text-2xl font-medium">
          Hi I'm{" "}
           <Highlighter action="highlight" color={isDarkMode ? "#5FB0E6" : "#87CEFA"}>
            Piyush.
          </Highlighter>{" "}
           I'm a{" "}
           <Highlighter action="underline" color="#FF9800">
           MERN
          </Highlighter>{" "} 
            developer and this is my Demo Project.Continue By{" "}
          <Highlighter action="highlight" color={isDarkMode ? "#5FB0E6" : "#87CEFA"}>
            Signup
          </Highlighter>{" "}
        </p>
      </div>

      {/* Section 2 */}
      <div className="mx-10 md:mx-35 flex flex-col items-start justify-center gap-2 border border-[var(--border-colour)] p-6 rounded shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-[var(--primary-colour)] w-full">
          Signup
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 bg-[var(--bg-colour)] w-full border-[var(--border-colour)]">
          <label className="flex flex-col text-[var(--text-colour)] font-semibold w-full">
            Your username
            <input
              {...register("username", { required: true })}
              className="border border-[var(--border-colour)] p-2 rounded bg-[var(--bg-colour)] text-[var(--text-colour)] placeholder-[var(--text-muted-colour)] w-full"
              type="text"
              placeholder="Enter your username"
            />
            {errors.username && <span className="text-red-500 text-sm">This field is required</span>}
          </label>

          <label className="flex flex-col text-[var(--text-colour)] font-semibold w-full">
            Your email
            <input
                {...register("email", { required: true })}
              className="border border-[var(--border-colour)] p-2 rounded bg-[var(--bg-colour)] text-[var(--text-colour)] placeholder-[var(--text-muted-colour)] w-full"
              type="email"
              placeholder="Enter your email"
            />
            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
          </label>

          <label className="flex flex-col text-[var(--text-colour)] font-semibold w-full">
            Your password
            <input
                {...register("password", { required: true })}
              className="border border-[var(--border-colour)] p-2 rounded bg-[var(--bg-colour)] text-[var(--text-colour)] placeholder-[var(--text-muted-colour)] w-full"
              type="password"
              placeholder="Enter your password"
            />
            {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
          </label>

          <button
            type="submit"
            className="bg-[var(--primary-colour)] text-[var(--bg-colour)] p-2 rounded hover:bg-[var(--primary-hover-colour)] transition w-full"
          >
            {
                isSubmitting ? 'Submitting...' : 'Sign Up'
            }
          </button>
        </form>

        <p className="mt-4 text-[var(--text-colour)] w-full">
          Already a user?{" "}
          <Link
            to="/signin"
            className="underline text-[var(--primary-colour)] hover:text-[var(--primary-hover-colour)]"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

import { Link } from "react-router-dom";
import Highlighter from "../components/Highlighter";
import useThemeStore from "../store/themeStore";

const Signin = () => {
    const { isDarkMode } = useThemeStore();
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 bg-[var(--bg-colour)] justify-center items-center h-[91.7vh]">
      {/* Section 2 */}
      <div className="mx-10 md:mx-35 flex flex-col items-start justify-center gap-2 border border-[var(--border-colour)] p-6 rounded shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-[var(--primary-colour)] w-full">
          Signin
        </h2>
        <form className="flex flex-col gap-6 bg-[var(--bg-colour)] w-full border-[var(--border-colour)]">
          <label className="flex flex-col text-[var(--text-colour)] font-semibold w-full">
            Your email
            <input
              className="border border-[var(--border-colour)] p-2 rounded bg-[var(--bg-colour)] text-[var(--text-colour)] placeholder-[var(--text-muted-colour)] w-full"
              type="email"
              placeholder="Enter your email"
            />
          </label>

          <label className="flex flex-col text-[var(--text-colour)] font-semibold w-full">
            Your password
            <input
              className="border border-[var(--border-colour)] p-2 rounded bg-[var(--bg-colour)] text-[var(--text-colour)] placeholder-[var(--text-muted-colour)] w-full"
              type="password"
              placeholder="Enter your password"
            />
          </label>

          <button
            type="submit"
            className="bg-[var(--primary-colour)] text-[var(--bg-colour)] p-2 rounded hover:bg-[var(--primary-hover-colour)] transition w-full"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-[var(--text-colour)] w-full">
          New here?{" "}
          <Link
            to="/signup"
            className="underline text-[var(--primary-colour)] hover:text-[var(--primary-hover-colour)]"
          >
            Sign Up
          </Link>
        </p>
      </div>
      {/* Section 1 */}

      <div className="hidden mx-10 md:flex md:justify-center md:items-center gap-10">
        <p className="text-[var(--text-colour)] text-lg md:text-xl lg:text-2xl font-medium">
          Hey Buddy!{" "}
          <Highlighter action="highlight"  color={isDarkMode ? "#5FB0E6" : "#87CEFA"}>
            Welcome Back
          </Highlighter>
          , continue to my App by{" "}
          <Highlighter action="underline" color="#FF9800">
            Logging In
          </Highlighter>
          .
        </p>

        <img className="w-1/2" src="guy.svg" alt="Hello Guy's" />
        {/* This is the Highliter Section */}
      </div>
    </div>
  );
};

export default Signin;

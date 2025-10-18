import useUserStore from "../store/userStore";

const Dashprofile = () => {
  const { user } = useUserStore();
  return (
    <div className="flex flex-col items-center gap-4 min-h-[73vh] px-4 sm:px-10">
      {/* Title */}
      <h1 className="text-2xl font-bold text-center sm:text-left md:text-3xl">Profile</h1>

      {/* Form */}
      <form className="flex flex-col gap-6 items-center w-full max-w-md">
        {/* Profile Image */}
        <div className="w-32 sm:w-38">
          <img
            src={user.imgURL}
            alt="Pic"
            className="rounded-full border-4 border-[var(--border-colour)] w-full"
          />
        </div>

        {/* Inputs */}
        <div className="w-full flex flex-col gap-4">
          <input
            className="my-2 border border-[var(--border-colour)] p-2 rounded bg-[var(--bg-colour)] text-[var(--text-colour)] placeholder-[var(--text-muted-colour)] w-full"
            type="text"
            placeholder="Username"
            value={user.username}
          />
          <input
            className="my-2 border border-[var(--border-colour)] p-2 rounded bg-[var(--bg-colour)] text-[var(--text-colour)] placeholder-[var(--text-muted-colour)] w-full"
            type="text"
            placeholder="Email"
            value={user.email}
          />
          <input
            className="my-2 border border-[var(--border-colour)] p-2 rounded bg-[var(--bg-colour)] text-[var(--text-colour)] placeholder-[var(--text-muted-colour)] w-full"
            type="text"
            placeholder="Password"
          />
          <button className="bg-[var(--primary-colour)] text-[var(--bg-colour)] p-2 rounded hover:bg-[var(--primary-hover-colour)] transition w-full">
            Update
          </button>
        </div>

        {/* Delete / Sign Out */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full text-sm font-semibold text-red-500 mt-4 gap-2 sm:gap-0">
          <span className="cursor-pointer hover:text-red-600 transition-colors">
            Delete Account
          </span>
          <span className="cursor-pointer hover:text-red-600 transition-colors">
            Sign Out
          </span>
        </div>
      </form>
    </div>
  );
};

export default Dashprofile;

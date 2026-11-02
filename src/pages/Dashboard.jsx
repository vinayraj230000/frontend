import { useNavigate } from "react-router-dom";
import { getUser, logoutUser } from "../services/authService";

function Dashboard() {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    logoutUser();
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-blue-600">
          My Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
        >
          Logout
        </button>

      </nav>

      {/* Dashboard Content */}
      <div className="max-w-6xl mx-auto p-6">

        <div className="bg-white p-8 rounded-xl shadow-sm">

          <h2 className="text-3xl font-bold text-gray-800">
            Welcome, {user?.name || "User"} 👋
          </h2>

          <p className="text-gray-500 mt-2">
            You are successfully logged in.
          </p>

        </div>

        {/* Profile Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm mt-6 max-w-md">

          <h3 className="text-xl font-semibold mb-5">
            User Profile
          </h3>

          <div className="space-y-4">

            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium text-gray-800">
                {user?.name}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium text-gray-800">
                {user?.email}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Status</p>
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Authenticated
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;
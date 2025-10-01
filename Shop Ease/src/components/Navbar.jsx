import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-1 font-medium transition ${
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-500"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `px-3 py-1 font-medium transition ${
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-500"
            }`
          }
        >
          Cart
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `px-3 py-1 font-medium transition ${
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-500"
            }`
          }
        >
          My Orders
        </NavLink>
      </div>
    </nav>
  );
}

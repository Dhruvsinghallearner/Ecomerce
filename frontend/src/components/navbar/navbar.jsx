import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

function Navbar() {

  const linkClass = ({ isActive }) =>
    isActive ? "text-pink-500 font-semibold" : "";

  return (
    <div className="border-b">
      <nav className="flex justify-around items-center px-10 py-4">

        <h1 className="text-2xl font-bold ">Hekto</h1>

        <div className="flex gap-6">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/page" className={linkClass}>Page</NavLink>
          <NavLink to="/products" className={linkClass}>Products</NavLink>
          <NavLink to="/blog" className={linkClass}>Blog</NavLink>
          <NavLink to="/shop" className={linkClass}>Shop</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        <div className="flex border rounded">
          <input
            type="text"
            placeholder="  Search..."
            className="px-3 py-1 outline-none"
          />
          <button
            style={{ backgroundColor: "var(--pink_color)" }}
            className="px-3 text-white  cursor-pointer"
          >
            <CiSearch />
          </button>
        </div>

      </nav>
    </div>
  );
}

export default Navbar;

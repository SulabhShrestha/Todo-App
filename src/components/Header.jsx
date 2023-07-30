import { NavLink } from "react-router-dom";
function Header() {
  return (
    <nav className="flex justify-center space-x-4 bg-green-100">
      <NavLink
        exact
        to="/"
        activeClassName="active"
        className="bg-red-100 px-2 py-1 rounded-md m-2"
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        activeClassName="active"
        className="bg-red-100 px-2 py-1 rounded-md m-2"
      >
        About
      </NavLink>
    </nav>
  );
}

export default Header;

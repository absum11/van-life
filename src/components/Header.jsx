import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        #VANLIFE
      </Link>
      <ul>
        <li>
          <NavLink
            to="/host"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Host
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/vans"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Vans
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

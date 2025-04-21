import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding:"10px", backgroundColor: "bisque" }}>
      <Link to="/" style={{textDecoration:"none", color:"grey"}}>Home</Link>
      <Link to="/components" style={{textDecoration:"none", color:"grey"}}>Components</Link>
      <Link to="/counter" style={{textDecoration:"none", color:"grey"}}>Counter</Link>
      <Link to="/users" style={{textDecoration:"none", color:"grey"}}>Users</Link>
    </nav>
  );
}

export default Navbar;

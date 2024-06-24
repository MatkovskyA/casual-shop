import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="container flex items-center justify-between px-3 py-4 mx-auto text-xl">
      <div className="logo">
        LOGOTYPE
      </div>
      <ul className="flex items-center justify-end gap-6 ">
        <li><Link to="/">Products</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;
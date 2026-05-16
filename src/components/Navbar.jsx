import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul style={{display:"flex", gap:50}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

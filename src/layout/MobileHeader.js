import Link from "next/link";
import { useState } from "react";

const MobileHeader = ({ toggle, close }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const active = (value) => setActiveMenu(value === activeMenu ? null : value);

  return (
    <div
      className={`mobile-nav ${toggle ? "open" : "hmburger-menu"}`}
      id="mobile-nav"
      style={{ display: "block" }}
    >
      <div className="res-log">
        <a href="index.html">
          <img src="https://res.cloudinary.com/denlhej9f/image/upload/v1694166166/logo2_mubdub.png" alt="Responsive Logo" />
        </a>
      </div>
      <ul>
        <li className={`menu-item-has-children ${activeMenu === "Home" ? "active" : ""}`}>
          <Link legacyBehavior href="/">
            Home
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="about">
            About
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="services">
            Services
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="blog-grid">
            Blog
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="contacts">
            Contact
          </Link>
        </li>
      </ul>
      <a href="JavaScript:void(0)" id="res-cross" onClick={() => close()} />
    </div>
  );
};

export default MobileHeader;

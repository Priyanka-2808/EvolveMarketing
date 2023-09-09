import Link from "next/link";
import { useState } from "react";
import MobileHeader from "./MobileHeader";
const Header = ({ headerExtraClass, noHeaderBg, blackLogo }) => {
  const [searchToggle, setSearchToggle] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <header
      className={headerExtraClass ? headerExtraClass : ""}
      style={
        !noHeaderBg
          ? { backgroundImage: `url(assets/img/header.jpg)` }
          : { background: "transparent" }
      }
    >
      <div className="container">
        <div className="nav">
          <div className="d-flex align-items-center">
            <div className="logo">
              <Link legacyBehavior href="/">
                <a>
                  {blackLogo ? (
                    <img alt="logo" src="assets/img/logo-black.png" />
                  ) : (
                    <img alt="logo" src="https://res.cloudinary.com/denlhej9f/image/upload/v1694166166/logo2_mubdub.png" />
                  )}
                </a>
              </Link>
            </div>
            <ul className="menu">
              <li>
                <Link legacyBehavior href="/">
                  Home
                </Link>
                <ul className="sub-menu">
                </ul>
              </li>
              <li>
                <Link legacyBehavior href="about">
                  About 
                </Link>
              
              </li>
              <li>
              <Link legacyBehavior href="services">
                      services
                    </Link>
              
              </li>
              <li>
                <Link legacyBehavior href="blog-grid">
                  Blog
                </Link>
                <ul className="sub-menu">
                </ul>
              </li>
              <li>
                <Link legacyBehavior href="contacts">
                  contacts
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <form id="content">
              <input
                type="text"
                name="input"
                className={`input ${searchToggle ? "square" : ""}`}
                id="search-input"
              />
              <button
                type="reset"
                className={`search ${searchToggle ? "close" : ""}`}
                id="search-btn"
                onClick={() => setSearchToggle(!searchToggle)}
              />
            </form>
            <Link legacyBehavior href="/contacts">
              <a className="themebtu">Get Started</a>
            </Link>
          </div>
          <div className="bar-menu" onClick={() => setToggle(true)}>
            <i className="fa-solid fa-bars" />
          </div>
        </div>
      </div>
      <MobileHeader toggle={toggle} close={() => setToggle(false)} />
    </header>
  );
};
export default Header;

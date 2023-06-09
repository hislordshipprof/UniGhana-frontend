import Image from "next/image";
import Link from "next/link";
import React from "react";
import { images } from "./Image";

interface NavbarProps {
  name: string;
  text: string;
  home: string;
}
const Navbar = ({ name, text, home }: NavbarProps) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <div>
              <h2 style={{ color: "#F28705" }}> {name}</h2>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Image src={images.Menu} alt="" className="img-fluid" />
          </button>
          <div
            className="collapse navbar-collapse py-3 justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              {text === "login" && (
                <li className="nav-item mb-2 mx-2 mb-lg-0">
                  <Link className="btn px-3" href="/register/login">
                    {text}
                  </Link>
                </li>
              )}
              {home === "Home" && (
                <li className="nav-item">
                  <Link className="btn px-2.4" href="/Home">
                    {home}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logo from "../Logo";

const Header = () => {
  const router = useRouter();

  const handlehome = () => {
    router.push('/')
  }
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div class="container">
         <Logo
         onClick={handlehome}
         />

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="oi oi-menu"></span> Menu
        </button>

        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link href="/" class="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link href="#about" class="nav-link">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link href="#ourHotels" class="nav-link">
                Our hotels
              </Link>
            </li>
            <li class="nav-item">
              <Link href="#Connectivity" class="nav-link">
                Connectivity
              </Link>
            </li>
            {/* <li class="nav-item">
              <Link href="#" class="nav-link">
                Mortgage
              </Link>
            </li>
            <li class="nav-item">
              <Link href="#" class="nav-link">
                New Development
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/contact" class="nav-link">
                Contact
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

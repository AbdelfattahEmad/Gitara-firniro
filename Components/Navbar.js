"use client";
import { useState } from "react";
import Link from "next/link";
import "../css/Navbar/Navbar.css";
import {
  CiUser,
  CiSearch,
  CiHeart,
  CiShoppingCart,
  CiMenuBurger
} from "react-icons/ci";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container ">
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="My Photo"
              width={150}
              height={30}
            />
          </Link>
        </div>

        {/* Menu for desktop */}
        <ul className="nav-links desktop-menu">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/productDetails">shop</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Icons  */}
        <ul className="Icons_nav">
          <li>
            {" "}<Link className="icon" href="/login">
              <CiUser />
            </Link>
          </li>
          <li>
            {" "}<Link className="icon" href="/login">
              <CiSearch />
            </Link>
          </li>
          <li>
            {" "}<Link className="icon" href="/login">
              <CiHeart />
            </Link>
          </li>
          <li>
            {" "}<Link className="icon" href="/login">
              <CiShoppingCart />
            </Link>
          </li>
        </ul>

        {/* menu for mobile */}
        <button onClick={() => setOpen(!open)} className="hamburger">
          <CiMenuBurger />
        </button>
      </div>

      {/* Menu for mobile */}
      {open &&
        <ul className="nav-links mobile-menu">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>}
    </nav>
  );
}

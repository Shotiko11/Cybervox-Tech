"use client"

import React from 'react';
import "./header.css";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <div className="companyName" href="/">Cybervox Tech</div>
          <ul className="menu">
            <li>
              <Link className="liclass" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="liclass" href="/Services">
                services
              </Link>
            </li>
            <li>
              <Link className="liclass" href="/AboutUs">
                About Us
              </Link>
            </li>
            <li>
              <Link className="liclass" href="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

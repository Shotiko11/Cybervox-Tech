"use client";

import React, { useState } from "react";
import "./header.css";
import Link from "next/link";
import Login from "@/pages/Login";

const Header = () => {

  const [login, setLogin] = useState(true);
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <header className="header">
        <nav className="nav">
          <div className="companyName" href="/">
            Cybervox Tech
          </div>
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
            <li>
              <Link className="liclalss" href="/Login" >Login</Link>
              {visible ? <Login login={login} setLogin={setLogin} /> : null}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
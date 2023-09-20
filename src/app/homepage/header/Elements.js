import Link from "next/link";
import React from "react";

const Elements = ({ setLogin, visible, setVisible }) => {
  const handleClickProp = () => {
    setLogin(false);
    setVisible(false);
  };

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
              <Link className="liclass" href="/Contact">
                States
              </Link>
              {/* {visible ? <Link className="liclalss" href="/" onClick={handleClickProp}>Login</Link> : <p></p>} */}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Elements;

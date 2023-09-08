import "./header.css";
import Link from "next/link";


const Header = () => {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <div className="companyName">Cybervox Tech</div>
          <ul className="menu">
            <li>
              <a className="liclass" href="/">
                Home
              </a>
            </li>
            <li>
              <Link className="liclass" href="/Services">
                services
              </Link>
            </li>
            <li>
              <a className="liclass" href="/AboutUs">
                About Us
              </a>
            </li>
            <li>
              <a className="liclass" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <h1>Hello</h1>
    </div>
  );
};

export default Header;

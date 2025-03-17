import React, { useState } from "react";
import { Link } from "gatsby";
import { Menu, X } from "react-feather";
import Logo from "../../static/assets/logo-alt.png";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuClassNames = isOpen ? "header-wrapper-active container" : "header-wrapper container";

  return (
    <header className="header-blog">
      <div className={menuClassNames}>
        <div className="header-left">
          <div className="logo-header">
            <Link to="/">
              <img src={Logo} alt="logo blog" />
            </Link>
          </div>
        </div>
        <div className="header-right-desk">
          <ul>
            <li>
              <Link to="/Convencoes">Convenções</Link>
            </li>
            <li>
              <Link to="/Noticias">Notícias</Link>
            </li>
            <li>
              <Link to="/ConhecaMatoGrosso">Conheça Mato Grosso</Link>
            </li>
            <li>
              <Link to="/Contato">Contato</Link>
            </li>
            <li>
              <Link to="/Historia">História</Link>
            </li>
            <li>
              <Link to="/Servicos">Serviços</Link>
            </li>
          </ul>
        </div>
        <div className="header-right-mob">
          <ul>
            <li>
              <Link to="/Convencoes">Convencoes</Link>
            </li>
            <li>
              <Link to="/Noticias">Notícias</Link>
            </li>
            <li>
              <Link to="/ConhecaMatoGrosso">Conheça Mato Grosso</Link>
            </li>
            <li>
              <Link to="/Contato">Contato</Link>
            </li>
            <li>
              <Link to="/Historia">História</Link>
            </li>
            <li>
              <Link to="/Servicos">Serviços</Link>
            </li>
          </ul>
        </div>
        <button className="button-blank menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X color="#0d518c" /> : <Menu color="#0d518c" />}
        </button>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react"
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'
import Logo from '../../static/assets/logo-alt.png'
import './Header.scss'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuClassNames = isOpen ? 'header-wrapper-active container' : 'header-wrapper container';

  return (
    <header
      className="header-blog"
    >
      <div className={menuClassNames}>
        <div className="header-left">
          <div className="logo-header">
            <Link to={"/"}>
              <img src={Logo} alt="logo blog" />
            </Link>
          </div>
        </div>
        <div className="header-right-desk">
          <ul>
            <li>
              <Link to={"/Federacao"}>A Federação</Link>
            </li>
            <li>
              <Link to={"/Noticias"}>Notícias</Link>
            </li>
            <li>
              <Link to={"/ConhecaMatoGrosso"}>Conheça Mato Grosso</Link>
            </li>
            <li>
              <Link to={"/FaleConosco"}>Fale Conosco</Link>
            </li>
            <li>
              <Link to={"/Homologacoes"}>Homologações</Link>
            </li>
          </ul>
        </div>
        <div className="header-right-mob">
          mob
        </div>
        <button
          className="button-blank menu-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ?
            <X
              color={"#0d518c"}
              className="x"
            />
              :
            <Menu
              color={"#0d518c"}
              className="menu"
            />}
        </button>
      </div>
    </header>
  )
}

export default Header

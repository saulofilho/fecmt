import React, { useState } from "react"
import { Link } from 'gatsby'
import { ToggleLayer, Arrow, Transition } from "react-laag"
import { Menu, X, ChevronUp, ChevronDown } from 'react-feather'
import Logo from '../../static/assets/logo-alt.png'
import './Header.scss'

const Header = () => {
  const [isOpenArrow, setIsOpenArrow] = useState(false);
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
            <ToggleLayer
                renderLayer={({ isOpen, layerProps, arrowStyle, layerSide }) => (
                  <Transition isOpen={isOpen}>
                    {(isOpen, onTransitionEnd) => (
                      <div
                        ref={layerProps.ref}
                        onTransitionEnd={onTransitionEnd}
                        className="layer"
                        style={{
                          ...layerProps.style,
                          transition: "opacity 340ms, transform 340ms",
                          opacity: isOpen ? 1 : 0,
                          transform: "scale(" + isOpen ? 1 : 0.5 + ")",
                        }}
                      >
                        <Link to={"/Historia"}>História</Link>
                        <Link to={"/Servicos"}>Serviços</Link>
                        <Arrow
                          style={arrowStyle}
                          layerSide={layerSide}
                          backgroundColor="rgb(239, 249, 255)"
                          borderWidth={2}
                          borderColor="#0d518c"
                          roundness={0}
                        />
                      </div>
                    )}
                  </Transition>
                )}
                placement={{
                  anchor: "BOTTOM_CENTER",

                  autoAdjust: true,

                  triggerOffset: 10
                }}
                closeOnOutsideClick
              >
                {({ triggerRef, toggle }) => (
                  <button
                    onClick={() => setIsOpenArrow(!isOpenArrow)}
                  >
                    <a
                      ref={triggerRef}
                      onClick={toggle}
                    >
                      A Federação
                      {isOpenArrow ?
                        <ChevronUp
                          color={"#0d518c"}
                          className="x"
                        />
                        :
                        <ChevronDown
                          color={"#0d518c"}
                          className="menu"
                        />}
                    </a>
                  </button>
                )}
              </ToggleLayer>
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
          </ul>
        </div>
        <div className="header-right-mob">
          <ul>
            <li>
            <ToggleLayer
                renderLayer={({ isOpen, layerProps, arrowStyle, layerSide }) => (
                  <Transition isOpen={isOpen}>
                    {(isOpen, onTransitionEnd) => (
                      <div
                        ref={layerProps.ref}
                        onTransitionEnd={onTransitionEnd}
                        className="layer"
                        style={{
                          ...layerProps.style,
                          transition: "opacity 340ms, transform 340ms",
                          opacity: isOpen ? 1 : 0,
                          transform: "scale(" + isOpen ? 1 : 0.5 + ")",
                        }}
                      >
                        <Link to={"/Historia"}>História</Link>
                        <Link to={"/Servicos"}>Serviços</Link>
                        <Arrow
                          style={arrowStyle}
                          layerSide={layerSide}
                          backgroundColor="rgb(239, 249, 255)"
                          borderWidth={2}
                          borderColor="#0d518c"
                          roundness={0}
                        />
                      </div>
                    )}
                  </Transition>
                )}
                placement={{
                  anchor: "BOTTOM_CENTER",

                  autoAdjust: true,

                  triggerOffset: 10
                }}
                closeOnOutsideClick
              >
                {({ triggerRef, toggle }) => (
                  <button
                  onClick={() => setIsOpenArrow(!isOpenArrow)}
                >
                  <a
                    ref={triggerRef}
                    onClick={toggle}
                  >
                    A Federação
                    {isOpenArrow ?
                      <ChevronUp
                        color={"#0d518c"}
                        className="x"
                      />
                      :
                      <ChevronDown
                        color={"#0d518c"}
                        className="menu"
                      />}
                  </a>
                </button>
                )}
              </ToggleLayer>
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
          </ul>
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

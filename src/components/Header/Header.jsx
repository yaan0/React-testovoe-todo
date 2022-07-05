import { useState } from "react";

import HeaderUser from "./HeaderUser/HeaderUser";
import Logo from "./Logo/Logo";

import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navStyle = (isOpen ? "isOpen" : "") + " " + "header__nav";

  const headerStyle = (isOpen ? "isOpen" : "") + " " + "header_mobail";

  return (
    <header className={headerStyle}>
      <div className="container">
        <div className="header__wrapper">
          <Logo />

          <nav className={navStyle}>
            <ul className="header__list">
              <li className="header__list-item">
                <a className="header__list-link" href="#">
                  Главная
                </a>
              </li>

              <li className="header__list-item">
                <a className="header__list-link" href="#">
                  Список
                </a>
              </li>

              <li className="header__list-item">
                <a className="header__list-link" href="#">
                  Друзья
                </a>
              </li>

              <li className="header__list-item">
                <a className="header__list-link" href="#">
                  Контакты
                </a>
              </li>
            </ul>
            <HeaderUser />
          </nav>
          <div
            className="header__menu"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {" "}
            {!isOpen ? (
              <>
                <span className="header__menu-item"></span>
                <span className="header__menu-item"></span>
                <span className="header__menu-item"></span>
              </>
            ) : (
              "x"
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

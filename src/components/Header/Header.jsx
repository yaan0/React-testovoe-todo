import { useState } from "react";

import HeaderUser from "./HeaderUser/HeaderUser";
import Logo from "./Logo/Logo";

import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [listActive, setListActive] = useState(1);

  const navStyle = (isOpen ? "isOpen" : "") + " " + "header__nav";
  const headerStyle = (isOpen ? "header_mobail" : "") + " " + "header";

  return (
    <header className={headerStyle}>
      <div className="container">
        <div className="header__wrapper">
          <Logo />

          <nav className={navStyle}>
            <ul className="header__list">
              <li
                className={`header__list-item ${
                  listActive === 1 && "header__list-item_active"
                }`}
                onClick={() => setListActive(1)}
              >
                <a className="header__list-link" href="#">
                  Главная
                </a>
              </li>

              <li
                className={`header__list-item ${
                  listActive === 2 && "header__list-item_active"
                }`}
                onClick={() => setListActive(2)}
              >
                <a className="header__list-link" href="#">
                  Список
                </a>
              </li>

              <li
                className={`header__list-item ${
                  listActive === 3 && "header__list-item_active"
                }`}
                onClick={() => setListActive(3)}
              >
                <a className="header__list-link" href="#">
                  Друзья
                </a>
              </li>

              <li
                className={`header__list-item ${
                  listActive === 4 && "header__list-item_active"
                }`}
                onClick={() => setListActive(4)}
              >
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
              <span className="header__menu-clouse">&#10006;</span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

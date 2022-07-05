import JusticeLogo from "../../../resourses/img/svg/JusticeLogo.svg";

import "./FooterTop.css";

const FooterTop = () => {
  return (
    <div className="footer__top">
      <img className="footer__top-logo" src={JusticeLogo} alt="Logo" />

      <nav className="footer__top-nav">
        <ul className="footer__top-list">
          <li className="footer__top-list-item">
            <a className="footer__top-list-link" href="#">
              Главная
            </a>
          </li>

          <li className="footer__top-list-item">
            <a className="footer__top-list-link" href="#">
              Список
            </a>
          </li>

          <li className="footer__top-list-item">
            <a className="footer__top-list-link" href="#">
              Друзья
            </a>
          </li>

          <li className="footer__top-list-item">
            <a className="footer__top-list-link" href="#">
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FooterTop;

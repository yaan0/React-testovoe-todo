import "./Footer.css";

import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom/FooterBottom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <FooterTop />
        <hr className="footer__hr" />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;

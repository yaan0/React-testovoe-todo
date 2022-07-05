import LogoItem from "../../../resourses/img/svg/Logo.svg";

const Logo = () => {
  return (
    <div className="header__logo">
      <img className="header__logo-image" src={LogoItem} alt="Logo" />
    </div>
  );
};

export default Logo;

import Notifications from "../../../resourses/img/svg/Notifications.svg";
import ProfilePicture from "../../../resourses/img/svg/ProfilePicture.svg";

import "./HeaderUser.css";

const HeaderUser = () => {
  return (
    <div className="header__user">
      <button className="header__user-button">Выйти</button>
      <img
        className="header__user-notifications"
        src={Notifications}
        alt="Notifications"
      />
      <img
        className="header__user-profile"
        src={ProfilePicture}
        alt="Picture"
      />
    </div>
  );
};

export default HeaderUser;

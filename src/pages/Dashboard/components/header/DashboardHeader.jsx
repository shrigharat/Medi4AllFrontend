import React from "react";
import { useSelector } from "react-redux";
import Medi4allLogo from "../../../../img/medi4alllogo.png";
import userTypes from "../../../../utils/userTypes";

const DashboardHeader = () => {
  const { userType, user } = useSelector((state) => state.authReducer);

  return (
    <div class="header">
      <nav>
        <div class="sidebar-button">
          <img className="logoImg" src={Medi4allLogo} />
          <span className="logoName">
            Medi<span className="four">4</span>all
          </span>
        </div>
        <div class="profile-details">
          <div className="user-img">
            <i class="far fa-user"></i>
          </div>
          <span class="admin_name">
            {userType === userTypes.institute? user.name : user.first_name}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default DashboardHeader;

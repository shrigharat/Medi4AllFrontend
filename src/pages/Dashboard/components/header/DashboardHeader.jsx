import React from "react";
import { useSelector } from "react-redux";
import Medi4allLogo from "../../../../img/medi4alllogo.png";

const DashboardHeader = () => {
  const { user } = useSelector((state) => state.authReducer);

  return (
    <section class="header">
      <nav>
        <div class="sidebar-button">
          <img className="logoImg" src={Medi4allLogo} />
          <span className="logoName">Medi<span className="four">4</span>all</span>
        </div>
        <div class="profile-details">
          <div className="user-img">
            <i class="far fa-user"></i>
          </div>
          <span class="admin_name">{user.first_name}</span>
        </div>
      </nav>
    </section>
  );
};

export default DashboardHeader;

import React from "react";
import "./Navigation.css";
import Sidebar from "./Sidebar";
import avatar from "../asserts/avatar/01.png";

function Navigation() {
  return (
    <div className="navigation">
      <Sidebar />
      {/* <div className="inputs">
        <input placeholder="search" />
      </div> */}
      <div className="profile-left">
        <div className="avatar-left">
          <img src={avatar} alt="" className="avatar-left" />
          <span className="tooltipinfo">
            <p>
              <i class="fas fa-user-circle"></i>Profile
            </p>
            <p>Setting</p>
            <p>Logout</p>
          </span>
        </div>
        <div className="profile-title">
          <h2 className="user">Kinjal Prajapati</h2>
          {/* <p className="user-level">100 KT Points</p> */}
        </div>
      </div>
    </div>
  );
}

export default Navigation;

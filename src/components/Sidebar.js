import React from "react";
import "./Sidebar.css";
import logo from "../asserts/logos/logo.png";
import home from "../asserts/images/sidebarlogo/Home.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="list">
        <ul className="sidebar-header">
          <img src={logo} className="logo" />
          <p className="sidebar-kt">KT Gamez</p>
        </ul>
        <ul className="sidebar-list">
          <div className="">
            <li className="anyclass">
              <div className="side-logo" >
                <i class="fas fa-home"></i>
              </div>
              <p id="side-title">Home</p>
            </li>
          </div>
          <li>
            <div className="side-logo">
              <i class="fas fa-gamepad"></i>
            </div>
            <p id="side-title">Play</p>
          </li>
          <li>
            <div className="side-logo">
              <i class="fas fa-trophy-alt"></i>
            </div>
            <p id="side-title">Play N Win</p>
          </li>
          <li>
            <div className="side-logo">
              <i class="fas fa-user-circle"></i>
            </div>
            <p id="side-title">Profile</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

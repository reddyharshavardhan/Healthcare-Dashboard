import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="app-logo">Healthcare.</h1>
        <input type="text" className="search-bar" placeholder="Search..." disabled />
      </div>
      <div className="header-right">
        <button className="icon-button" title="Notifications">
          🔔
        </button>
        <div className="user-profile">
          <img
            src="https://i.pravatar.cc/40"
            alt="User Avatar"
            className="avatar"
          />
          <span>Harsha</span>
        </div>
        <button className="add-button" title="Add">
          +
        </button>
      </div>
    </header>
  );
};

export default Header;

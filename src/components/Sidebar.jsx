import React from "react";
import "./Sidebar.css";

const links = [
  "Dashboard",
  "History",
  "Calendar",
  "Appointments",
  "Statistics",
  "Tests",
  "Chat",
  "Support",
  "Setting",
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>General</h2>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

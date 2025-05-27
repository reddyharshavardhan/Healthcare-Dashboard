import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";

const App = () => {
  return (
    <div style={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      <Header />
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;

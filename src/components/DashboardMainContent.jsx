import React from "react";
import DashboardOverview from "./DashboardOverview";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import "./DashboardMainContent.css";

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main">
      <div>
        <DashboardOverview />
        <CalendarView />
      </div>
      <div>
        <UpcomingSchedule />
        <ActivityFeed />
      </div>
    </main>
  );
};

export default DashboardMainContent;

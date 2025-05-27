import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import "./DashboardOverview.css";

const DashboardOverview = () => {
  return (
    <section className="dashboard-overview">
      <AnatomySection />
      <HealthStatusCards />
    </section>
  );
};

export default DashboardOverview;

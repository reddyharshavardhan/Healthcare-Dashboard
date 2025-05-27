import React from "react";
import "./HealthStatusCards.css";

const cards = [
  {
    title: "Weight",
    value: "72 kg",
    trend: "up",
    trendValue: "2.4",
  },
  {
    title: "BMI",
    value: "27.3",
    trend: "down",
    trendValue: "0.3",
  },
  {
    title: "Glucose",
    value: "122 mg/dL",
    trend: "up",
    trendValue: "12",
  },
  {
    title: "Blood Pressure",
    value: "82 / 55 mmHg",
    trend: "up",
    trendValue: "1",
  },
];

const HealthStatusCards = () => {
  return (
    <div className="health-status-cards">
      {cards.map(({ title, value, trend, trendValue }) => (
        <div key={title} className="card">
          <h4>{title}</h4>
          <p className="value">{value}</p>
          <p className={`trend ${trend}`}>
            {trend === "up" ? "↑" : "↓"} {trendValue}%
          </p>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;

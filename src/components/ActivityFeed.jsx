import React from "react";
import "./ActivityFeed.css";

const activities = [
  { id: 1, user: "Anna", action: "completed a blood test", time: "2 hours ago" },
  { id: 2, user: "Mark", action: "booked an appointment", time: "1 day ago" },
  { id: 3, user: "Lina", action: "uploaded new medical records", time: "3 days ago" },
];

const ActivityFeed = () => {
  return (
    <section className="activity-feed">
      <h3>Activity Feed</h3>
      <ul>
        {activities.map(({ id, user, action, time }) => (
          <li key={id}>
            <strong>{user}</strong> {action} <span className="time">{time}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ActivityFeed;

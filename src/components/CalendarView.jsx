import React from "react";
import "./CalendarView.css";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dates = Array.from({ length: 30 }, (_, i) => i + 1);

const CalendarView = () => {
  return (
    <section className="calendar-view">
      <h3>Calendar</h3>
      <div className="calendar-grid">
        {days.map((day) => (
          <div key={day} className="calendar-day">
            {day}
          </div>
        ))}
        {dates.map((date) => (
          <div
            key={date}
            className={`calendar-date ${date === 15 ? "today" : ""}`}
          >
            {date}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CalendarView;

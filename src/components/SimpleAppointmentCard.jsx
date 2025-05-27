import React from "react";
import "./SimpleAppointmentCard.css";

const SimpleAppointmentCard = ({ appointment }) => {
  const { time, description, doctor } = appointment;

  return (
    <div className="appointment-card">
      <div className="time">{time}</div>
      <div className="details">
        <div className="description">{description}</div>
        <div className="doctor">{doctor}</div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;

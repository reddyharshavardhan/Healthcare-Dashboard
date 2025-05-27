import React from "react";
import SimpleAppointmentCard from "./SimpleAppointmentCard";
import "./UpcomingSchedule.css";

const appointments = [
  {
    id: 1,
    time: "9:30 AM",
    description: "Dental Checkup",
    doctor: "Dr. Smith",
  },
  {
    id: 2,
    time: "11:00 AM",
    description: "Eye Exam",
    doctor: "Dr. Johnson",
  },
  {
    id: 3,
    time: "1:00 PM",
    description: "Physical Therapy",
    doctor: "Dr. Lee",
  },
];

const UpcomingSchedule = () => {
  return (
    <section className="upcoming-schedule">
      <h3>Upcoming Schedule</h3>
      {appointments.map((appt) => (
        <SimpleAppointmentCard key={appt.id} appointment={appt} />
      ))}
    </section>
  );
};

export default UpcomingSchedule;

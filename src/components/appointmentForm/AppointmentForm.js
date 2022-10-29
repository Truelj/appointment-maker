import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={title} placeholder="title" onChange={(e)=>{setTitle(e.target.value)}} />
      <input name="date" value={date} min={getTodayString} placeholder="date" onChange={(e)=>{setDate(e.target.value)}} />
      <input name="time" value={time} placeholder="time" onChange={(e)=>{setTime(e.target.value)}} />
      <ContactPicker contacts={contacts} setContact={setContact}  />
      <button>submit</button>

    </form>
    
  );
};

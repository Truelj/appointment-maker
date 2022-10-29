import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} placeholder="name" onChange={(e)=>{setName(e.target.value)}}/>
      <input name="phone" value={phone} placeholder="phone" onChange={(e)=>{setPhone(e.target.value)}}/>
      <input name="email" value={email} placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
      <button>Submit</button>
    </form>
  );
};

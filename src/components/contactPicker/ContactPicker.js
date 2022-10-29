import React from "react";

export const ContactPicker = ({contacts, setContact}) => {
  const changeOption = (e)=>{
    const contact = e.target.value;
    setContact(contact);
    
  }
  return (
    <select onChange={changeOption} >
      <option key value select="selected" ></option>
      {contacts.map((contact) =>{
        return <option key={contact.name} value={contact.name} >{contact.name} </option>
        })}
    </select>
    
  );
};

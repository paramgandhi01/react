import React, { useState } from "react";

export default function Hooksobject() {
  const [name, setName] = useState({ fname: "", lname: "" });
  function handlechange(e) {
    setName({
      ...name,
      [e.target.name]: e.target.value,
    });
  }

  console.log(name);
  return (
    <div>
      <input
        type="text"
        name="fname"
        value={name.fname}
        onChange={handlechange}
      ></input>
      <input
        type="text"
        name="lname"
        value={name.lname}
        onChange={handlechange}
      ></input>
      <h4>your first name is-{name.fname}</h4>
      <h4>your last name is-{name.lname}</h4>
    </div>
  );
}

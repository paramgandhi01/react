import React, { useState } from "react";

export default function Hookarray() {
  const [arr, setArr] = useState([]);
  const [name, setName] = useState({ fname: "", lname: "" });
  function handlechange(e) {
    setName({
      ...name,
      [e.target.name]: e.target.value,
    });
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const obj = {
      firstName: name.fname,
      lastName: name.lname,
    };

    setArr((arr) => [...arr, obj]);
  };

  console.log(arr);

  return (
    <div>
      <ul>
        {arr.map((e, i) => {
          return (
            <li key={i}>
              <spam>Fname:{e.firstName}</spam>
<br />
              <spam>Lname:{e.lastName}</spam>
            </li>
          );
        })}
      </ul>
      <form onSubmit={onSubmitHandler}>
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
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

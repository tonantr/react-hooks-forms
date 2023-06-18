import React, { useState } from "react";

function Form({firstName, lastName, handleFirstNameChange, handleLastNameChange,}) {

  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");

  // function handleFirstNameChange(event) {
  //   setFirstName(event.target.value)
  // };

  // function handleLastNameChange(event) {
  //   setLastName(event.target.value)
  // }

  return (
    <form>
      <input type="text" value={firstName} onChange={handleFirstNameChange} />
      <input type="text" value={lastName} onChange={handleLastNameChange}/>
      <button type="submit">Submit</button>
    </form>
  );

  // const [newsletter, setNewsletter] = useState(false);

  // function handleNewsletterChange(event) {
  //   setNewsletter(event.target.checked);
  // }

  // return (
  //   <form>
  //     <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
  //     <input
  //       type="checkbox"
  //       id="newsletter"
  //       onChange={handleNewsletterChange}
  //       checked={newsletter}
  //     />
  //     <button type="submit">Submit</button>
  //   </form>
  // );

  // const [number, setNumber] = useState(0);
  // const [isInvalidNumber, setIsInvalidNumber] = useState(null);

  // function handleNumberChange(event) {
  //   const newNumber = parseInt(event.target.value);
  //   if (newNumber >= 0 && newNumber <= 5) {
  //     setNumber(newNumber);
  //     setIsInvalidNumber(null);
  //   } else {
  //     setIsInvalidNumber(`${newNumber} is not a valid number!`);
  //   }
  // }

  // return (
  //   <form>
  //     <input type="number" value={number} onChange={handleNumberChange} />
  //     {isInvalidNumber ? <span style={{ color: "red" }}>{isInvalidNumber}</span> : null}
  //   </form>
  // );

}

export default Form;

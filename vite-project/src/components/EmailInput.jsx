import React from "react";
import "./email.css"  ;
const EmailInput = () => {
  return (
    <>
      <form>
        <input type="email" placeholder="Email" className="emailInput"></input>
        <button type="submit"> Submit </button>
      </form>
    </>
  );
};

export default EmailInput;

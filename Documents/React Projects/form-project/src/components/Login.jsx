import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    identifier: "",
    password: "",
  });

  function handleInputChange(element, event) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [element]: event.target.value,
    }));
  }

  function handleSubmission(e) {
    e.preventDefault();
    console.log("submitted");
    //console.log("Entered Identifier: ", enteredValues.identifier);
    //console.log("Entered Password: ", enteredValues.password);
    console.log(enteredValues);
  }
  return (
    <>
      <form name="myForm" onSubmit={handleSubmission}>
        <h2>Login</h2>

        <div className="control-row">
          <div className="control no-margin">
            <label htmlFor="email">Email</label>
            <input
              id="identifier"
              type="identifier"
              name="identifier"
              onChange={(event) => handleInputChange("identifier", event)}
              value={enteredValues.identifier}
            />
          </div>

          <div className="control no-margin">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={(event) => handleInputChange("password", event)}
              value={enteredValues.password}
            />
          </div>
        </div>

        <p className="form-actions">
          <button className="button button-flat">Reset</button>
          <button className="button">Login</button>
        </p>
      </form>
    </>
  );
}

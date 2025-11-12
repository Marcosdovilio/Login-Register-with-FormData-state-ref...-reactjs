import { useRef } from "react";

// Extracting login with useRef

export default function Login() {
  //setting up refs for email and password inputs
  const emailRef = useRef();
  const passwordRef = useRef();

  // Handle form submission function
  const handleSubmit = (e) => {
    //preventning defuault values
    e.preventDefault();

    //getting current values from refs and storing in variables
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    console.log(`email: ${enteredEmail} senha: ${enteredPassword}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            name="email"
            // attaching ref to email input
            ref={emailRef}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

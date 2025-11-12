import { useState } from "react";

// Extracting login with useState

export default function Login() {
  // State to store form values
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  //State to store if the value was edited
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  //if email of didEdit is true and the value of the email from the state Value doest NOT contains a "@", than enteredEmail becomes true
  const enteredEmail = didEdit.email && !value.email.includes("@");
  //if password of didEdit is true and the value of has more than 4 digits, enteredPassword becomes true
  const enteredPassword = didEdit.password && value.password.length <= 4;

  // Handle form submission function
  const handleSubmit = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();
    console.log(`email: ${value.email} senha: ${value.password}`);
  };

  // Handle input values function indetifier: email or password, value: input value from e.target.value
  const handleInput = (identifier, value) => {
    // Update state with new input value prevState to ensure we don't overwrite other fields
    setValue((prevState) => ({
      //include previous state
      ...prevState,
      //update only the field that changed
      [identifier]: value,
    }));

    //setDidEdit to false so the <p> disappear when the user is typing
    setDidEdit((prevState) => ({
      //use spread operator for its previous value so now the new value have the previous value as a base
      ...prevState,
      //set the identifier to false
      [identifier]: false,
    }));
  };

  //handleBlur recieves a identifier
  const handleBlur = (identifier) => {
    //setDidEdit get its previous value on prevState, meaning 'previous state value'
    setDidEdit((prevState) => ({
      //use spread operator for its previous value so now the new value have the previous value as a base
      ...prevState,
      //set the identifier to true
      [identifier]: true,
    }));
  };

  return (
    // Form with the function onSubmit handler
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            //onBlur is a hook that only activates when the user click outside of the input, when it 'loses focus'
            //onBlur is calling the handleBlur function and passing 'email' as the identifier
            onBlur={() => handleBlur("email")}
            //every time the input changes, call handleInput with the field identifier and new value, 'e' is the event object handleInput is the function
            //"email" is the identifier for the email field and e.target.value is the current value of the input field
            onChange={(e) => handleInput("email", e.target.value)}
            value={value.email}
          />
          <div className="control-error">
            {
              //only show the paragraph if enteredEmail is true
              enteredEmail && <p>Please, enter a valid email adress.</p>
            }
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={() => handleBlur("password")}
            //same as above but for password
            onChange={(e) => handleInput("password", e.target.value)}
            value={value.password}
          />
          <div className="control-error">
            {
              //only show the paragraph if enteredEmail is true
              enteredPassword && <p>Please, enter a valid password.</p>
            }
          </div>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

import "./LoginForm.css";
import { useState } from "react";

export const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="signup-container">
      <form className="form">
        <h1>SIGN UP</h1>
        <input
          type="text"
          placeholder="First Name"
          className="form__input"
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="form__input"
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
        />
        <input
          type="text"
          placeholder="Username"
          className="form__input"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="email"
          placeholder="Email"
          className="form__input"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form__input"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="btn">Sign Up</button>
      </form>
    </div>
  );
};

import { useState } from "react";
import "./LoginForm.css";
export const LoginForm = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className="login-container">
      <form className="form">
        <h1>LOG IN</h1>
        <input
          type="email"
          placeholder="Email"
          className="form__input"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="Password"
          className="form__input"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="btn">Log In</button>
      </form>
      <p className="">Don't have an account? Sign up</p>
    </div>
  );
};

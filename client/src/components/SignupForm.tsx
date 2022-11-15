import "./LoginForm.css";
import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Loader } from "./Loader";

export const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const { signup, isLoading, error } = useSignup();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup(firstname, lastname, username, email, password);
  };

  return (
    <div className="signup-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>SIGN UP</h1>
        <input
          type="text"
          placeholder="First Name"
          className="form__input"
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="form__input"
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
          required
        />
        <input
          type="text"
          placeholder="Username"
          className="form__input"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
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
          required
        />
        {isLoading ? <Loader /> : <button className="btn">Sign Up</button>}
      </form>
      <span data-testid="error" className="error-msg">
        {error}
      </span>
    </div>
  );
};

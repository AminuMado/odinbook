import { useState } from "react";
import "./LoginForm.css";
import { useLogin } from "../hooks/useLogin";
import { Loader } from "./Loader";
export const LoginForm = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, isLoading, error } = useLogin();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(username, password);
  };
  return (
    <div className="login-container">
      <form className="form" onSubmit={handleSubmit}>
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
        {isLoading ? <Loader /> : <button className="btn">Log In</button>}
      </form>
      <span data-testid="error" className="error-msg">
        {error}
      </span>
    </div>
  );
};

import { useState } from "react";

export const useLogin = () => {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const randomSeed = Math.floor(Math.random() * 11); // for testing need to change later
  const url = `https://jsonplaceholder.typicode.com/users/${randomSeed}`;
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch(url);
    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));
      // update the auth context
      // update the loading state
      setIsLoading(false);
    }
  };
  return { login, isLoading, error };
};

/**
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    */

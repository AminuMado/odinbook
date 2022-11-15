import { useState } from "react";

export const useSignup = () => {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const url = ``;
  const signup = async (
    firstname: string,
    lastname: string,
    username: string,
    email: string,
    password: string
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname,
        lastname,
        username,
        email,
        password,
      }),
    });
    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));
      // update the auth context
      // remove the Isloading state
      setIsLoading(false);
    }
  };
  return { signup, isLoading, error };
};

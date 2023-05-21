import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useGoogleSignIn = () => {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const url = "/auth/google";
  const { state, dispatch } = useAuthContext();
  console.log(state.user);
  const login = async () => {
    setIsLoading(true);
    setError(null);
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    // const json = await response.json();
    // if (!response.ok) {
    //   setIsLoading(false);
    //   setError(json.error);
    // }
    // if (response.ok) {
    //   console.log(JSON.stringify(json));
    // save the user to local storage
    // localStorage.setItem("user", JSON.stringify(json));
    // update the auth context
    //  const user = { username: "Aminu Mukhtar", token: "12345678" };
    //  dispatch({ type: "LOGIN", payload: user });
    // update the loading state
    //   setIsLoading(false);
    // }
  };
  return { login, isLoading, error };
};

import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useGoogleSignIn = () => {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const url = "http://localhost:4000/auth/google";
  const { state, dispatch } = useAuthContext();
  console.log(state.user);
  const login = async () => {
    setIsLoading(true);
    setError(null);
    window.open(url, "_self");
  };
  return { login, isLoading, error };
};

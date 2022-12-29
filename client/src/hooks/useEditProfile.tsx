import { useState } from "react";
// This function is not complete id need an id to make it work.
//  need to revist this hook later on.
export const EditProfile = () => {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const url = ``;
  const updateProfile = async () => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));
      // update the user context
      // remove the Isloading state
      setIsLoading(false);
    }
  };
  return { updateProfile, isLoading, error };
};

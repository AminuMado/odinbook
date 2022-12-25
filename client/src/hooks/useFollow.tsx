import { useState } from "react";
export const useFollow = () => {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const follow = async (id: string) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("this should be the db url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // basically all i want is to wait for the db to confirm it has added the follower and thats it no need for the response.
      // update the loading state
      setIsLoading(false);
    }
  };
  return { follow, isLoading, error };
};

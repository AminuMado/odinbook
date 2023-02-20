import { useState } from "react";
export const useSort = () => {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const sort = async (category: string, type: string) => {
    // Basically takes two inputs the category eg. Following followers date likes comments etc
    // Then the type which is asc(asecnding) or desc(descending)
    // The rest is handled by the backend server which returns a result that we would use to update state
    setIsLoading(true);
    setError(null);
    const response = await fetch("this should be the db url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category, type }),
    });

    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // This should return an array of the followers/following/likes etc based on what is requested sorted in the requested form,
      // update the loading state
      setIsLoading(false);
      // return the response
    }
  };

  return { sort, isLoading, error };
};

import { useState } from "react";
import { useUserContext } from "./useUserContext";

export const useUpdateNotifcation = () => {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { state, dispatch } = useUserContext();
  const url = `https://jsonplaceholder.typicode.com/users/1`;
  const update = async (id: string) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch(url); // this should be a post request
    /*
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({id}),
        });
    */
    // you should get the id of the notification and just update it
    // furthermore if i can manage it i should have an update all for a user in the backend
    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // to update you access the notifications and change the state we can do this using the filter method
      const notifications = state.user.notifications;
      notifications.forEach((notification) => {
        if (notification.id === id) {
          notification.isSeen = true;
        }
      });
      dispatch({ type: "UPDATE_NOTIFICATION", payload: notifications });
      // update the loading state
      setIsLoading(false);
      console.log(notifications);
    }
  };
  return { update, isLoading, error };
};

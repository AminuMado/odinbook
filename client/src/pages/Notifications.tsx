import { Notification } from "./Notification";
import { useUserContext } from "../hooks/useUserContext";

export const Notifications = () => {
  // so we need to import the component and return it
  const { state } = useUserContext();
  const notifications = state.user.notifications.map((item) => {
    return (
      <Notification
        id={item.id}
        key={item.id}
        profileName="Michael Schofield"
        profileId={item.userId}
        date="10/12/23"
        postId={item.postId}
        type={item.type}
        isViewed={item.isSeen}
      />
    );
  });
  return <div>{notifications}</div>;
};

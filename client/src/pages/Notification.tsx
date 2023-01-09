import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Notification.css";
import { useUpdateNotifcation } from "../hooks/useUpdateNotification";
type props = {
  id: string;
  profileName: string;
  profileId: string;
  date: string;
  postId: string | null;
  type: string;
  isViewed: boolean;
};
export const Notification = ({
  id,
  profileName,
  profileId,
  date,
  postId,
  type,
  isViewed,
}: props) => {
  const [isRead, setIsRead] = useState(isViewed);
  const { updateAll } = useUpdateNotifcation();
  let placeholder = "followed you";
  if (type === "comment") {
    placeholder = "added a comment to your ";
  }
  if (type === "like") {
    placeholder = "liked your ";
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => updateAll(), []);
  return (
    <div
      className={`notification-container ${
        isRead ? "notification-read" : "notification-unread"
      } `}
    >
      <div className="notification__content">
        <div className="notification__content-left">
          <Link to={`${profileId}/profile`} className="notification__user">
            {profileName}
          </Link>
          <p>
            {placeholder}{" "}
            {postId && <Link to={`${postId}/postDetails`}>post</Link>}
          </p>
        </div>
        <p>{date}</p>
      </div>
      {!isRead && (
        <div
          className="notification__markAsRead"
          onClick={() => setIsRead(true)}
        />
      )}
    </div>
  );
};

import { Link } from "react-router-dom";
import { useState } from "react";
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
  const { update } = useUpdateNotifcation();
  let placeholder = "followed you";
  if (type === "comment") {
    placeholder = "added a comment to your ";
  }
  if (type === "like") {
    placeholder = "liked your ";
  }
  return (
    <div
      className={`notification-container ${
        isRead ? "notification-read" : "notification-unread"
      } `}
    >
      <div className="notification__content">
        <Link to={`${profileId}/profile`} className="notification__user">
          {profileName}
        </Link>
        <p>
          {placeholder}{" "}
          {postId && <Link to={`${postId}/postDetails`}>post</Link>}
        </p>
        <p>{date}</p>
      </div>
      {!isRead && (
        <div
          className="notification__markAsRead"
          onClick={() => {
            update(id);
            setIsRead(true);
          }}
        />
      )}
    </div>
  );
};

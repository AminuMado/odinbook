import { useState } from "react";
import { Link } from "react-router-dom";
import "./Notification.css";
export const Notification = () => {
  const [isRead, setIsRead] = useState(true);
  return (
    <div>
      {/* This component should show notifications
    1. when you get followed
    2. when someone likes your post
    3. when someone comments on your post
    Another thing is how do i clear a notification?
    should i have a button? or when i open the page?
     */}
      <div
        className={`notification-container ${
          isRead ? "notification-unread" : "notification-read"
        } `}
      >
        <div className="notification__content">
          <p>
            <Link to="/profile" className="notification__user">
              Michael Scofield{" "}
            </Link>
            followed you
          </p>
          <p>31/12/2022</p>
        </div>
        {isRead && (
          <div
            className="notification__markAsRead"
            onClick={() => setIsRead(false)}
          />
        )}
      </div>
      <div
        className={`notification-container ${
          isRead ? "notification-unread" : ""
        } `}
      >
        <div className="notification__content">
          <p>
            <Link to="/profile" className="notification__username">
              {" "}
              Ghandi
            </Link>{" "}
            liked your{" "}
            <Link to="/postDetail" className="notification__post">
              {" "}
              post
            </Link>
          </p>
          <p>31/12/2022</p>
        </div>
        {isRead && (
          <div
            className="notification__markAsRead"
            onClick={() => setIsRead(false)}
          />
        )}
      </div>
      <div
        className={`notification-container ${
          isRead ? "notification-unread" : ""
        } `}
      >
        <div className="notification__content">
          <p>
            <Link to="/profile">Lincon</Link> added a comment to your{" "}
            <Link to="/post">post</Link>
          </p>
          <p>31/12/2022</p>
        </div>
        {isRead && (
          <div
            className="notification__markAsRead"
            onClick={() => setIsRead(false)}
          />
        )}
      </div>
    </div>
  );
};

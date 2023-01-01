import "./Notification.css";
export const Notification = () => {
  return (
    <div>
      {/* This component should show notifications
    1. when you get followed
    2. when someone likes your post
    3. when someone comments on your post
    Another thing is how do i clear a notification?
    should i have a button? or when i open the page?
     */}
      <div className="notification-container notification-unread">
        <div className="notification__content">
          <p> Micheal Scholfield followed you</p>
          <p>31/12/2022</p>
        </div>
        <button>Mark as Read</button>
      </div>
      <div className="notification-container ">
        <div className="notification__content">
          <p> Ghandi liked your post</p>
          <p>31/12/2022</p>
        </div>
        <button>Mark as Read</button>
      </div>
      <div className="notification-container notification-unread">
        <div className="notification__content">
          <p> Lincon added a comment to your post</p>
          <p>31/12/2022</p>
        </div>
        <button>Mark as Read</button>
      </div>
    </div>
  );
};

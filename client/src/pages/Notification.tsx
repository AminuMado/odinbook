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
      <div>
        <p> Micheal Scholfield followed you</p>
        <p>2/12/2022</p>
      </div>
      <div>
        <p> Ghandi liked your post</p>
        <p>2/12/2022</p>
      </div>
      <div>
        <p> Lincon added a comment to your post</p>
        <p>2/12/2022</p>
      </div>
    </div>
  );
};

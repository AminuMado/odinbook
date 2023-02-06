import "./ExploreUserCard.css";
import avatar1 from "../../Assets/Images/20.jpg";
export const ExploreUserCard = () => {
  // This should be a card having the profile image
  // A user name
  // A date joined
  // followers count
  // following count
  // Basic layout is done now i have to have an avatar modal showing image cliking functionality
  // Username should link to  the profile associated with the user

  return (
    <div className="exploreUserCard-container">
      <div className="exploreUserCard-top">
        <img
          src={avatar1}
          alt="avatar"
          className="exploreUserCard-top__avatar"
        />
        <p className="exploreUserCard-top__username">The Man Himself</p>
      </div>
      <div className="exploreUserCard-middle">
        <p className="exploreUserCard-middle__following">Following: 20</p>
        <p className="exploreUserCard-middle__followers"> Followers: 50</p>
      </div>
      <div className="exploreUserCard-bottom">
        <p className="exploreUserCard-bottom__date"> A long time ago</p>
        <button className="exploerUserCard-bottom__button">follow</button>
      </div>
    </div>
  );
};

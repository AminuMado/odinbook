import "./Profile.css";
import avatar from "../Assets/Images/6.jpg";
import { PostCard } from "../components/Card/PostCard";
export const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__userInfo-container">
        <img src={avatar} alt="avatar" className="profile__userInfo_avatar" />
        <div className="profile__userInfo">
          <div className="profile__userInfo_top">
            <h2>Tchalla Black Panther</h2>
          </div>
          <div className="profile__userInfo_bottom">
            <div className="profile__userInfo_about">
              <h2 className="profile__userInfo_about_header">About Me</h2>
              <p className="profile__userInfo_about_content">
                I am the king of wakanda and the current black panther. My
                interests are bringing world peace.
              </p>
            </div>
            <button className="profile__editprofile-btn">Edit Profile</button>
          </div>
        </div>
      </div>
      <div className="profile__tabs">
        <h3>Posts</h3>
        <h3>Followers</h3>
        <h3>Following</h3>
      </div>
      <div className="profile__posts">
        <PostCard />
      </div>
    </div>
  );
};

// <div>
//   {/* should have a couple things
// 1. a display picture
// 2. about section
// 3. following and followers
// 4. posts
// 5. Check my previous star wars world project
//  */}
//   Hello Profile
//   <div className="profile-container">
//     <div className="profile-header">
//       {/* your avatar
//         your username
//         your about
//         your following
//         your followers
//          */}
//       <img src={avatar} alt="avatar" />
//     </div>
//     <div className="profile-posts"></div>
//   </div>
// </div>

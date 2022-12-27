import "./Profile.css";
import avatar from "../Assets/Images/6.jpg";
import { PostCard } from "../components/Card/PostCard";
import { useState } from "react";
import { Followers } from "../components/Followers/Followers";
import { Following } from "../components/Following/Following";
import ManageAccountsTwoToneIcon from "@mui/icons-material/ManageAccountsTwoTone";
export const Profile = () => {
  const [activeTab, setActiveTab] = useState("Posts");
  const tabs = ["Posts", "Followers", "Following"];
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

            <ManageAccountsTwoToneIcon className="profile__editprofile-btn" />
          </div>
        </div>
      </div>
      <div className="profile__tabs">
        {tabs.map((tab) => {
          return (
            <h3
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={activeTab === tab ? "active" : "underline"}
            >
              {tab}
            </h3>
          );
        })}
      </div>
      {activeTab === "Posts" ? <PostCard /> : null}
      {activeTab === "Followers" ? <Followers /> : null}
      {activeTab === "Following" ? <Following /> : null}
    </div>
  );
};

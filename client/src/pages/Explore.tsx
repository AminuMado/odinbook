import { useState } from "react";
import { ExploreMessage } from "../components/Explore/ExploreMessage";
import { ExplorePosts } from "../components/Explore/ExplorePosts";
import { ExploreUsers } from "../components/Explore/ExploreUsers";
import "./Explore.css";
export const Explore = () => {
  // So we want to have a all users mode. So you can see all active users.
  // you can sort the users From A-Z, most followers , most following, date Joined,oldest, and latest
  // Posts
  // you can sort the posts into oldest, latest, most comments, most liked, or most engaged
  // Personal Message of how the site works or a message from me to the user with some gifs etc
  const [activeTab, setActiveTab] = useState("");
  const tabs = ["Users", "Posts"];
  const renderTab = (tab: string) => {
    switch (tab) {
      case "Users":
        return <ExploreUsers />;
      case "Posts":
        return <ExplorePosts />;
      default:
        return <ExploreMessage />;
    }
  };
  return (
    <div className="explore--container">
      <nav className="explore--nav-container">
        <ul>
          {tabs.map((tab) => {
            return (
              <li
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="explore-details">{renderTab(activeTab)}</div>
    </div>
  );
};

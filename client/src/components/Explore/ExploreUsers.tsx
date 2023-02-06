import "./ExploreUsers.css";
import { useState } from "react";
import { ExploreUserCard } from "./ExploreUserCard";
export const ExploreUsers = () => {
  const [activeTab, setActiveTab] = useState("Date");
  const tabs = ["Date", "Followers", "Following"];

  return (
    <div className="exploreUsers-container">
      {/* A tab containing the various sort categories */}
      {/* A container containg the users in their various sort modes all users(in alpabeticall order), the OGs (first to join), new to join,most followers, most following */}
      {/* A loading icon when a call to the db is made no saving state locally */}
      <div className="exploreUsers__tab">
        {tabs.map((tab) => {
          return (
            <li
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => {
                setActiveTab(tab);
              }}
            >
              {tab}
            </li>
          );
        })}
      </div>
      <div className="exploreUsers__details">
        {/* The explore user card goes here */}
        <ExploreUserCard />
        <ExploreUserCard />
        <ExploreUserCard />
      </div>
    </div>
  );
};

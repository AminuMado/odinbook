import "./ExploreUsers.css";
import { useState } from "react";
import { ExploreUserCard } from "./ExploreUserCard";
export const ExploreUsers = () => {
  const [activeTab, setActiveTab] = useState({ tab: "Date", sorting: "desc" });
  const tabs = ["Date", "Followers", "Following"];
  const handleClick = (tab: string) => {
    // first condition is to check if the current tab is clicked
    // if thats the case we just wanna update the sorting;
    // if its a different tab then we wanna update the tab and switch the sorting to the default
    if (tab === activeTab.tab) {
      const nextSorting = activeTab.sorting === "desc" ? "asc" : "desc";
      const update = { tab: tab, sorting: nextSorting };
      setActiveTab(update);
    } else {
      const update = { tab: tab, sorting: "desc" };
      setActiveTab(update);
    }
  };
  return (
    <div className="exploreUsers-container">
      {/* A tab containing the various sort categories */}
      {/* A container containg the users in their various sort modes all users(in alpabeticall order), the OGs (first to join), new to join,most followers, most following */}
      {/* A loading icon when a call to the db is made no saving state locally */}
      {/* I want to have  */}
      <div className="exploreUsers__tab">
        {tabs.map((tab) => {
          return (
            <li
              key={tab}
              className={
                activeTab.tab === tab ? "active " + activeTab.sorting : ""
              }
              onClick={() => {
                handleClick(tab);
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

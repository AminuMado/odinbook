import "./ExploreUsers.css";
import { useState, useEffect } from "react";
import { ExploreUserCard } from "./ExploreUserCard";
import { useSort } from "../../hooks/useSort";
export const ExploreUsers = () => {
  const [users, setUsers] = useState(null);
  const { sort, isLoading, error } = useSort();
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
  useEffect(() => {
    // This would have to be reworked on after i rig up the backend
    const usersFromDB = sort(activeTab.tab, activeTab.sorting);
    // setUserss(usersFromDB);
  }, [activeTab]);
  return (
    <div className="exploreUsers-container">
      {/* A tab containing the various sort categories */}
      {/* A container containg the users in their various sort modes all users(in alpabeticall order), the OGs (first to join), new to join,most followers, most following */}
      {/* A loading icon when a call to the db is made no saving state locally */}
      {/* I want to have  */}
      {/* Gotta import the loader to alternate */}
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
        {/* check if is Loading then show the loading animation else do the whole mapping thing */}
        {/* The explore user card goes here */}
        <ExploreUserCard />
        <ExploreUserCard />
        <ExploreUserCard />
      </div>
    </div>
  );
};

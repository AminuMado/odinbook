import { useEffect, useState } from "react";
import { useSort } from "../../hooks/useSort";
import { ExplorePostCard } from "./ExplorePostCard";
import "./ExplorePosts.css";
export const ExplorePosts = () => {
  const [posts, setPosts] = useState(null);
  const [activeTab, setActiveTab] = useState({ tab: "Date", sorting: "desc" });
  const tabs = ["Date", "Likes", "Comments"];
  const { isLoading, sort, error } = useSort();
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
    const postsFromDB = sort(activeTab.tab, activeTab.sorting);
    // setPosts(postsFromDB);
  }, [activeTab]);
  return (
    <div className="explorePosts-container">
      {/* A tab containing the various sort categories */}
      {/* A container containg the users in their various sort modes all users(in alpabeticall order), the OGs (first to join), new to join,most followers, most following */}
      {/* A loading icon when a call to the db is made no saving state locally */}
      {/* I want to have  */}
      <div className="explorePosts__tab">
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
      <div className="explorePosts__details">
        {/* The posts state is used to map here 
        The one below is for visualization will change it when the backend is rigged up*/}
        {/* The post cards go here */}
        <ExplorePostCard />
        <ExplorePostCard />
        <ExplorePostCard />
        <ExplorePostCard />
      </div>
    </div>
  );
};

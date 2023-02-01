import { useState } from "react";
import "./ExplorePosts.css";
export const ExplorePosts = () => {
  const [activeTab, setActiveTab] = useState("");
  const tabs = ["Date", "Comments", "Likes"]; // you have to update me

  return (
    <div>
      {/* A tab containg the sorting icon and the list of things to be done to the page */}
      {/* A container that has the loading animation until a fetch is done if it fails there should be an error message or a gif depicting something went wrong */}
      {/* Since its a post page should i have a summary post place holder so that if you wanna engage you gotta to to the post details page. or just have the post itself */}
      <nav className="explorePosts-nav">
        <ul>
          {tabs.map((tab) => {
            return <li onClick={() => setActiveTab(tab)}>{tab}</li>;
          })}
        </ul>
      </nav>
      <div className="explorePosts-details"></div>
    </div>
  );
};

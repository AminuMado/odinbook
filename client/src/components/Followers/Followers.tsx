import "./Followers.css";
import avatar1 from "../../Assets/Images/1.jpg";
import avatar2 from "../../Assets/Images/2.jpg";
import avatar3 from "../../Assets/Images/3.jpg";
import avatar4 from "../../Assets/Images/24.jpg";
import avatar5 from "../../Assets/Images/25.jpg";
import { FollowerCard } from "../Following/FollowerCard";
export const Followers = () => {
  const sampleFollowers = [
    {
      userId: "test1",
      username: "Tchalla Black Panther",
      avatar: avatar1,
    },
    {
      userId: "test2",
      username: "Random Lady",
      avatar: avatar2,
    },
    {
      userId: "test3",
      username: "Elden Lord",
      avatar: avatar3,
    },
    {
      userId: "test41",
      username: "Magnus Carlsen",
      avatar: avatar4,
    },
    {
      userId: "test2",
      username: "Random Lady",
      avatar: avatar2,
    },
    {
      userId: "test51",
      username: "Pablo Escobar",
      avatar: avatar5,
    },
    {
      userId: "test41",
      username: "Magnus Carlsen",
      avatar: avatar4,
    },
    {
      userId: "test1",
      username: "Tchalla Black Panther",
      avatar: avatar1,
    },
    {
      userId: "test3",
      username: "Elden Lord",
      avatar: avatar3,
    },
    {
      userId: "test41",
      username: "Magnus Carlsen",
      avatar: avatar4,
    },
    {
      userId: "test51",
      username: "Pablo Escobar",
      avatar: avatar5,
    },
  ];
  return (
    <div className="followers-container">
      {sampleFollowers.map((follower) => {
        return (
          <FollowerCard
            id={follower.userId}
            key={follower.userId}
            username={follower.username}
            avatar={follower.avatar}
          />
        );
      })}
    </div>
  );
};

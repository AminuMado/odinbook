import "./Following.css";
import avatar1 from "../../Assets/Images/7.jpg";
import avatar2 from "../../Assets/Images/5.jpg";
import avatar3 from "../../Assets/Images/13.jpg";
import avatar4 from "../../Assets/Images/4.jpg";
import avatar5 from "../../Assets/Images/15.jpg";
export const Following = () => {
  // We are going to have an array of userId that represents the followers.This id is what we would use to get the username&photo of the
  // profile
  // So if you are displayed here we are already following you. If we click on unfollow... We have to query the db remove you from the db have a loading animation
  // Then have this component check again if you are in the array. If you are not.
  // That context gets the various user ids and queries the db for their images and
  // We are going to have to have an Id of the person we wanna get his followers from, have a useeffect that queries the db for that information
  // we have a state holding the informatoin followers
  // from the db i want you to return an object that has { userId,username,useravatar}
  // userId is for removing or adding follower or going to profile
  // username is for display
  // avatar is for display also
  // So in simple terms we need two sources of truth, this component is responsible for finding the users to display
  // What requires extra logic is the unfollow and follow logic
  // That depends on the followers the current user profile has and we would find that from the user context. It should have
  // A followers and following array stored
  // So this component just figures out who to display and nothing more
  const sampleFollowers = [
    {
      userId: 1,
      username: "Tchalla Black Panther",
      avatar: avatar1,
    },
    {
      userId: 2,
      username: "Random Lady",
      avatar: avatar2,
    },
    {
      userId: 3,
      username: "Elden Lord",
      avatar: avatar3,
    },
    {
      userId: 4,
      username: "Magnus Carlsen",
      avatar: avatar4,
    },
    {
      userId: 5,
      username: "Pablo Escobar",
      avatar: avatar5,
    },
  ];

  return (
    <div className="following-container">
      {sampleFollowers.map((follower) => {
        return (
          <div className="following__card" key={follower.userId}>
            <img
              className="following__card_avatar"
              src={follower.avatar}
              alt="avatar"
            />
            <p>{follower.username}</p>
            <button>Unfollow</button>
          </div>
        );
      })}
    </div>
  );
};

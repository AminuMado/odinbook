import { useEffect, useState } from "react";
import { useFollow } from "../../hooks/useFollow";
import { useUserContext } from "../../hooks/useUserContext";
import { Loader } from "../Loader";

type props = {
  id: string;
  avatar: string;
  username: string;
};
export const FollowerCard = ({ id, avatar, username }: props) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const { state } = useUserContext();
  const { follow, unFollow, isLoading } = useFollow();

  useEffect(() => {
    state.user.followers.forEach((item) => {
      if (item.userId === id) {
        setIsFollowing(true);
        return;
      }
    });
  }, [id, state]);

  return (
    <div className="following__card">
      <img className="following__card_avatar" src={avatar} alt="avatar" />
      <p>{username}</p>
      {isFollowing ? (
        isLoading ? (
          <Loader />
        ) : (
          <button
            onClick={() => {
              follow(id);
              setIsFollowing(false);
            }}
          >
            Unfollow
          </button>
        )
      ) : isLoading ? (
        <Loader />
      ) : (
        <button
          onClick={() => {
            unFollow(id);
            setIsFollowing(true);
          }}
        >
          Follow
        </button>
      )}
    </div>
  );
};

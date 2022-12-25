import { useEffect, useState } from "react";
import { useUserContext } from "../../hooks/useUserContext";

type props = {
  id: string;
  avatar: string;
  username: string;
};
export const FollowerCard = ({ id, avatar, username }: props) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const { state } = useUserContext();
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
        <button onClick={() => setIsFollowing(false)}>Unfollow</button>
      ) : (
        <button onClick={() => setIsFollowing(true)}>Follow</button>
      )}
    </div>
  );
};

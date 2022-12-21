import "./Followers.css";
import avatar1 from "../../Assets/Images/1.jpg";
import avatar2 from "../../Assets/Images/2.jpg";
import avatar3 from "../../Assets/Images/3.jpg";
import avatar4 from "../../Assets/Images/24.jpg";
import avatar5 from "../../Assets/Images/25.jpg";
export const Followers = () => {
  return (
    <div className="followers-container">
      <div className="follower__card">
        <img className="follower__card_avatar" src={avatar1} alt="avatar" />
        <p>Micheal Schofield</p>
        <button>Unfollow</button>
      </div>
      <div className="follower__card">
        <img className="follower__card_avatar" src={avatar2} alt="avatar" />
        <p>Lady Random</p>
        <button>Unfollow</button>
      </div>
      <div className="follower__card">
        <img className="follower__card_avatar" src={avatar3} alt="avatar" />
        <p>Elden Lord</p>
        <button>Unfollow</button>
      </div>
      <div className="follower__card">
        <img className="follower__card_avatar" src={avatar4} alt="avatar" />
        <p>Magnussen and a lot of </p>
        <button>Unfollow</button>
      </div>
      <div className="follower__card">
        <img className="follower__card_avatar" src={avatar5} alt="avatar" />
        <p>Nakamura</p>
        <button>Follow</button>
      </div>

      <div className="follower__card">
        <img className="follower__card_avatar" src={avatar2} alt="avatar" />
        <p>Palo Alto</p>
        <button>Unfollow</button>
      </div>
      <div className="follower__card">
        <img className="follower__card_avatar" src={avatar1} alt="avatar" />
        <p>Micheal Schofield</p>
        <button>Follow</button>
      </div>
      <div className="follower__card">
        <img className="follower__card_avatar" src={avatar2} alt="avatar" />
        <p>Lady Random</p>
        <button>Follow</button>
      </div>

      <div className="follower__card">
        <img className="follower__card_avatar" src={avatar4} alt="avatar" />
        <p>Magnussen</p>
        <button>Follow</button>
      </div>
      <div className="follower__card">
        <img className="follower__card_avatar" src={avatar5} alt="avatar" />
        <p>Nakamura</p>
        <button>Follow</button>
      </div>
      <div className="follower__card">
        <img className="follower__card_avatar" src={avatar2} alt="avatar" />
        <p>Palo Alto</p>
        <button>Follow</button>
      </div>
    </div>
  );
};

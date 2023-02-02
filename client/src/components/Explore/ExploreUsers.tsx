import "./ExploreUsers.css";
export const ExploreUsers = () => {
  return (
    <div className="exploreUsers-container">
      {/* A tab containing the various sort categories */}
      {/* A container containg the users in their various sort modes all users(in alpabeticall order), the OGs (first to join), new to join,most followers, most following */}
      {/* A loading icon when a call to the db is made no saving state locally */}
      <div className="exploreUsers__tab">
        {/* The explore user sortable tab goes here */}
      </div>
      <div className="exploreUsers__details">
        {/* The explore user card goes here */}
      </div>
    </div>
  );
};

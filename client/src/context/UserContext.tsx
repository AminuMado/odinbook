// This context is primarily supposed to save the userid the followers and following and anyother thing that might be relevant down the line
// Could end up merging it back to the authcontext
import { createContext, useReducer } from "react";
import { testUser1 } from "../testUser";
import { testUser2 } from "../testUser";
import { testUser3 } from "../testUser";
import { testUser4 } from "../testUser";
import { testUser5 } from "../testUser";
import { testUser6 } from "../testUser";
import { testUser7 } from "../testUser";
import { testUser8 } from "../testUser";
import { testUser9 } from "../testUser";
import { testNotification1 } from "../testUser";
import { testNotification2 } from "../testUser";
import { testNotification3 } from "../testUser";
const testUser = {
  userId: testUser1.userId,
  about: testUser1.about,
  username: testUser1.username,
  avatar: testUser1.avatar,
  followers: [
    { ...testUser2 },
    { ...testUser3 },
    { ...testUser4 },
    { ...testUser5 },
  ],
  following: [
    { ...testUser6 },
    { ...testUser7 },
    { ...testUser8 },
    { ...testUser9 },
  ],
  notifications: [
    { ...testNotification1 },
    { ...testNotification2 },
    { ...testNotification3 },
  ],
};
type follower = {
  userId: string;
  username: string;
  avatar: string;
};
type notification = {
  id: string;
  type: string;
  userId: string;
  postId: string | null;
  isSeen: boolean;
};
type user = {
  userId: string;
  username: string;
  avatar: string;
  about: string;
  followers: follower[];
  following: follower[];
  notifications: notification[];
};

// An interface for our user state
interface UserState {
  user: user;
}
// An type for our reducer actions
type UserAction =
  | { type: "UPDATE_FOLLOWERS"; payload: follower[] }
  | { type: "UPDATE_FOLLOWING"; payload: follower[] }
  | { type: "UPDATE_NOTIFICATION"; payload: notification[] };

// Our reducer function
function userReducer(state: UserState, action: UserAction) {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE_FOLLOWERS":
      return { user: { ...state.user, followers: payload } };
    case "UPDATE_FOLLOWING":
      return { user: { ...state.user, following: payload } };
    case "UPDATE_NOTIFICATION":
      return { user: { ...state.user, notifications: payload } };
    default:
      return state;
  }
}
interface ContextType {
  state: UserState;
  dispatch: React.Dispatch<UserAction>;
}
type UserCtxProviderProps = {
  children: React.ReactNode;
};
export const UserContext = createContext({} as ContextType);
export const UserContextProvider = ({ children }: UserCtxProviderProps) => {
  const [state, dispatch] = useReducer(userReducer, { user: testUser });

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

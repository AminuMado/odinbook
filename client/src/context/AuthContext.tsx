import { createContext, useEffect, useReducer } from "react";
type user = {
  username: string;
  token: string; // this token should be linked to the userId on the db for further queries for user data
};
// An interface for our user state
interface AuthState {
  user: user | null;
}
// An interface for our reducer actions
interface AuthAction {
  type: "LOGIN" | "LOGOUT";
  payload: user | null;
}
// Our reducer function
function authReducer(state: AuthState, action: AuthAction) {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return { user: payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
}
interface ContextType {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}
type AuthCtxProviderProps = {
  children: React.ReactNode;
};
export const AuthContext = createContext({} as ContextType);
export const AuthContextProvider = ({ children }: AuthCtxProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });
  useEffect(() => {
    // get user from local storage
    const currentUser = localStorage.getItem("user");
    if (currentUser) {
      const user = JSON.parse(currentUser);
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

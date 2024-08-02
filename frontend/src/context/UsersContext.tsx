import React, { createContext, ReactNode, useReducer } from "react";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
type UsersState = {
  users: User[] | null;
};
type UsersAction = {
  type: string;
  payload: User[];
};

export const UsersContext = createContext<
  | {
      state: UsersState;
      dispatch: React.Dispatch<UsersAction>;
    }
  | undefined
>(undefined);

const usersReducer = (state: UsersState, action: UsersAction) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

const UsersContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(usersReducer, { users: null });
  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;

import React, { createContext, ReactNode, useReducer, useState } from "react";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
};
type UsersState = {
  users: User[];
};
type UsersAction = {
  type: string;
  payload: User[] | User;
};

export const UsersContext = createContext<
  | {
      state: UsersState;
      dispatch: React.Dispatch<UsersAction>;
      formIsActive: boolean;
      setFormIsActive: React.Dispatch<React.SetStateAction<boolean>>;
      activeUser: number | null;
      setActiveUser: React.Dispatch<React.SetStateAction<number | null>>;
    }
  | undefined
>(undefined);

const usersReducer = (state: UsersState, action: UsersAction) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload as User[],
      };
    case "CREATE_USER":
      return { users: [action.payload as User, ...state.users] };
    default:
      return state;
  }
};

const UsersContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(usersReducer, { users: [] });
  const [formIsActive, setFormIsActive] = useState(false);
  const [activeUser, setActiveUser] = useState<number | null>(null);
  return (
    <UsersContext.Provider
      value={{
        state,
        dispatch,
        formIsActive,
        setFormIsActive,
        activeUser,
        setActiveUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;

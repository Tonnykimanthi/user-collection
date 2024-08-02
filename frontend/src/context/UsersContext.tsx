import React, { createContext, ReactNode, useReducer, useState } from "react";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
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
      formIsActive: boolean;
      setFormIsActive: React.Dispatch<React.SetStateAction<boolean>>;
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
    case "CREATE_USER":
      return { user: action.payload, ...state };
    default:
      return state;
  }
};

const UsersContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(usersReducer, { users: null });
  const [formIsActive, setFormIsActive] = useState(true);
  return (
    <UsersContext.Provider value={{ state, dispatch,formIsActive, setFormIsActive }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;

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
      firstName: string;
      setFirstName: React.Dispatch<React.SetStateAction<string>>;
      lastName: string;
      setLastName: React.Dispatch<React.SetStateAction<string>>;
      email: string;
      setEmail: React.Dispatch<React.SetStateAction<string>>;
      formIsActive: boolean;
      setFormIsActive: React.Dispatch<React.SetStateAction<boolean>>;
      activeUser: number | null;
      setActiveUser: React.Dispatch<React.SetStateAction<number | null>>;
      userModalIsOpen: boolean;
      setUserModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
      deleteModalIsOpen: boolean;
      setDeleteModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }
  | undefined
>(undefined);

const usersReducer = (state: UsersState, action: UsersAction) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        users: action.payload as User[],
      };
    case "CREATE_USER":
      return { users: [action.payload as User, ...state.users] };
    case "UPDATE_USER":
      const updatedUser = action.payload as User;
      return {
        users: state.users.map((user) =>
          user._id === updatedUser._id ? updatedUser : user,
        ),
      };
    case "DELETE_USER":
      const deletedUser = action.payload as User;
      return {
        users: state.users.filter((user) => user._id !== deletedUser._id),
      };
    default:
      return state;
  }
};

const UsersContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(usersReducer, { users: [] });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [formIsActive, setFormIsActive] = useState(false);
  const [activeUser, setActiveUser] = useState<number | null>(null);
  const [userModalIsOpen, setUserModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  return (
    <UsersContext.Provider
      value={{
        state,
        dispatch,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        formIsActive,
        setFormIsActive,
        activeUser,
        setActiveUser,
        userModalIsOpen,
        setUserModalIsOpen,
        deleteModalIsOpen,
        setDeleteModalIsOpen
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;

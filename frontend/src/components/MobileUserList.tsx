import { User } from "../context/UsersContext";

type HomeForSmallScreen = {
  users: User[];
  handleClickedUser: (index: number) => void;
};

const MobileUserList = ({ users, handleClickedUser }: HomeForSmallScreen) => {

  return (
    <div className="mt-10 flex flex-col items-center gap-y-5 sm:hidden w-full">
      {users.map((user, index) => (
        <div
          key={user._id}
          className="w-11/12 cursor-pointer space-y-2 rounded-lg bg-secondary p-5 text-xl"
          onClick={() => {
            handleClickedUser(index);
          }}
        >
          <div className="flex gap-x-4 [&>h2]:font-medium">
            <h2>First name:</h2>
            <p>{user.firstName}</p>
          </div>
          <div className="flex gap-x-4 [&>h2]:font-medium">
            <h2>Last name:</h2>
            <p>{user.lastName}</p>
          </div>
          <div className="flex gap-x-4 [&>h2]:font-medium">
            <h2>Email:</h2>
            <p>{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileUserList;

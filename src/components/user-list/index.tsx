import { FC } from "react";
import { IUser } from "../../types";
import User from "./user";

interface UserListProps {
  users: IUser[];
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.email} />
      ))}
    </div>
  );
};

export default UserList;

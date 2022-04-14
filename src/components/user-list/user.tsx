import { FC } from "react";
import { Link } from "react-router-dom";

import { IUser } from "../../types";

interface UserProps {
  user: IUser;
}

const User: FC<UserProps> = ({ user }) => {
  return (
    <Link
      to={`/users/${user.id}`}
      style={{ display: "block", color: "black", textDecoration: "none" }}
    >
      {user.id}. {user.name} проживает в городе {user.address.city} на улице{" "}
      {user.address.street}
    </Link>
  );
};

export default User;

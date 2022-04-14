import axios from "axios";
import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import List from "../../components/list";
import { IUser } from "../../types";
import User from "../../components/user-list/user";

const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <List
        items={users}
        renderItem={(user) => <User user={user} key={user.email} />}
      />

      <Outlet />
    </>
  );
};

export default UsersPage;

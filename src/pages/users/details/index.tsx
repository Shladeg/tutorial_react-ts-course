import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import User from "../../../components/user-list/user";

import { IUser } from "../../../types";

// interface UserDatailsPageParams {
//   id: string;
// }

const UserDatailsPage: FC = () => {
  const { id } = useParams() as {
    id: string;
  };

  const [user, setUser] = useState<IUser | null>(null);

  const fetchUser = async () => {
    try {
      const response = await axios.get<IUser>(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      setUser(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (user === null) {
    return <div>Загрузка...</div>;
  }

  return <User user={user} />;
};

export default UserDatailsPage;

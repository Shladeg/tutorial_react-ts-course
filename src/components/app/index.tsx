import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import TodosPage from "../../pages/todos";
import UsersPage from "../../pages/users";
import UserDatailsPage from "../../pages/users/details";

function App() {
  return (
    <>
      <div>
        <NavLink
          to="/todos"
          style={({ isActive }) => ({
            marginRight: 8,
            color: isActive ? "red" : "black",
          })}
        >
          Todos
        </NavLink>

        <NavLink
          to="/users"
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          Users
        </NavLink>
      </div>

      <Routes>
        <Route path="/users" element={<UsersPage />} />

        <Route path="/users/:id" element={<UserDatailsPage />} />

        <Route path="/todos" element={<TodosPage />} />
      </Routes>
    </>
  );
}

export default App;

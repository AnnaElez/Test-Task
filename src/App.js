import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import classes from "./App.module.css";
import UsersList from "./UsersList/UsersList";
import UserInfo from "./UserInfoPage/UserInfo";

let App = () => {
  const [users, setUsers] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetch("https://random-data-api.com/api/v2/users?size=100")
      .then((response) => response.json())
      .then((usersList) => {
        localStorage.setItem("users", JSON.stringify(usersList));
        setUsers(usersList);
      })
      .catch(() => {
        console.log("Error while fetching");
      });
  }, []);

  const mainContainerStyles = checked
    ? classes.mainContainer + " " + classes.mainContainerDark
    : classes.mainContainer;

  return (
    <div className={mainContainerStyles}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <UsersList
                users={users}
                checked={checked}
                setChecked={setChecked}
              />
            }
          />
          <Route path="/:userId" element={<UserInfo checked={checked} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

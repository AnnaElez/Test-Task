import React, { useState } from "react";
import classes from "./UsersList.module.css";
import Switch from "react-switch";
import Container from "../UI/Container/Container";
import TableRowContent from "../UI/TableRowContent/TableRowContent";
import Pagination from "../UI/Pagination/Pagination";

const UsersList = ({ users, checked, setChecked }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  const handleChange = () => {
    setChecked(!checked);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const tableHeaderStyles = checked
    ? classes.tableHeader + " " + classes.tableHeaderDark
    : classes.tableHeader;

  return (
    <Container checked={checked}>
      <div className={tableHeaderStyles}>
        <table>
          <thead>
            <tr>
              <th className={classes.bigField}>Username</th>
              <th className={classes.smallField}>First name</th>
              <th className={classes.smallField}>Last name</th>
              <th className={classes.smallField}>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  onColor="#808080"
                  onHandleColor="#000000"
                  handleDiameter={30}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 0px 1px 3px rgba(190, 190, 190, 0.3)"
                  activeBoxShadow="0px 0px 1px 10px rgba(190, 190, 190, 0.3)"
                  height={20}
                  width={48}
                  className="react-switch"
                  id="material-switch"
                />
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div className={classes.tableContent}>
        <table>
          <tbody>
            {currentUsers.map((user) => {
              return (
                <TableRowContent
                  user={user}
                  checked={checked}
                  key={user.username}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination
        setCurrentPage={setCurrentPage}
        users={users}
        usersPerPage={usersPerPage}
        checked={checked}
      />
    </Container>
  );
};

export default UsersList;

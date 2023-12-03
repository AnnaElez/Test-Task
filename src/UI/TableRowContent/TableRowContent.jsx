import React from "react";
import fieldClasses from "../../UsersList/UsersList.module.css";
import classes from "./TableRowContent.module.css";
import { Link } from "react-router-dom";

const TableRowContent = ({ user, checked }) => {
  const avatarStyles = checked
    ? classes.avatar + " " + classes.avatarDark
    : classes.avatar;

  const seeMoreStyles = checked
    ? classes.seeMore + " " + classes.seeMoreLight
    : classes.seeMore;

  return (
    <tr>
      <td className={fieldClasses.bigField}>
        <img src={user.avatar} className={avatarStyles} />
        {user.username}
      </td>
      <td className={fieldClasses.smallField}>{user.first_name}</td>
      <td className={fieldClasses.smallField}>{user.last_name}</td>
      <td className={fieldClasses.smallField}>
        <Link to={"/" + user.id} className={seeMoreStyles}>
          See more
        </Link>
      </td>
    </tr>
  );
};

export default TableRowContent;

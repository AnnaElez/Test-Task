import React, { useState } from "react";
import classes from "./Pagination.module.css";

const Pagination = ({ setCurrentPage, users, usersPerPage, checked }) => {
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageLinkStyles = checked
    ? classes.pageLink + " " + classes.pageLinkLight
    : classes.pageLink;
  return (
    <nav>
      <ul className={classes.pagination}>
        {pageNumbers.map((number) => (
          <li key={number} className={classes.pageItem}>
            <a onClick={() => paginate(number)} className={pageLinkStyles}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

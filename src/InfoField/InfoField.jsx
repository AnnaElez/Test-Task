import React, { useState } from "react";
import classes from "./InfoField.module.css";

const InfoField = ({ parametr, label, checked }) => {
  const [value, setValue] = useState(parametr);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    console.log(label + ":" + value);
    event.preventDefault();
  };

  const submitButtonStyles = checked
    ? classes.submitButton + " " + classes.submitButtonLight
    : classes.submitButton;

  const labelStyles = checked ? classes.labelLight : "";

  return (
    <form onSubmit={handleFormSubmit} className={classes.row}>
      <label className={labelStyles}>{label} :</label>
      {label === "Birthdate" && (
        <input
          type="date"
          value={value}
          min="1900-01-01"
          max="2023-12-31"
          onChange={handleInputChange}
          className={classes.input}
        />
      )}
      {label === "Employment" && (
        <div className={classes.employmentBox}>
          <input
            type="text"
            value={value?.title}
            onChange={handleInputChange}
            className={classes.input}
          />
          <input
            type="text"
            value={value?.key_skill}
            onChange={handleInputChange}
            className={classes.input}
          />
        </div>
      )}
      {label != "Birthdate" && label != "Employment" && (
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          className={classes.input}
        />
      )}
      <input type="submit" value="Submit" className={submitButtonStyles} />
    </form>
  );
};

export default InfoField;

import React from "react";
import classes from "./UserInfo.module.css";
import InfoField from "../InfoField/InfoField";
import Container from "../UI/Container/Container";
import { useParams } from "react-router-dom";

const UserInfo = ({ checked }) => {
  const { userId } = useParams();
  const userData = JSON.parse(localStorage.getItem("users")).find(
    (el) => el.id == userId
  );

  return (
    <Container checked={checked}>
      <div className={classes.inputsHolder}>
        <InfoField
          parametr={userData?.username}
          label="Username"
          checked={checked}
        />
        <InfoField
          parametr={userData?.first_name}
          label="Name"
          checked={checked}
        />
        <InfoField
          parametr={userData?.last_name}
          label="Last name"
          checked={checked}
        />
        <InfoField
          parametr={userData?.date_of_birth}
          label="Birthdate"
          checked={checked}
        />
        <InfoField
          parametr={userData?.gender}
          label="Gender"
          checked={checked}
        />
        <InfoField
          parametr={userData?.phone_number}
          label="Phone number"
          checked={checked}
        />
        <InfoField
          parametr={userData?.social_insurance_number}
          label="Insurance number"
          checked={checked}
        />
        <InfoField
          parametr={userData?.employment}
          label="Employment"
          checked={checked}
        />
      </div>
    </Container>
  );
};

export default UserInfo;

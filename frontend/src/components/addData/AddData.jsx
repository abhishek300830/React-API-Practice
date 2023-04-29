import React, { useContext } from "react";
import { AddDataContainer } from "./addStyle";
import dataContext from "../../context/dataContext";
import DeleteData from "../deleteData/DeleteData";

const AddData = () => {
  const { userData, setUserData, host, getDataFromAPI } =
    useContext(dataContext);

  // Handling save button click
  const onNameChange = (event) => {
    setUserData({ ...userData, name: event.target.value });
  };
  const onAgeChange = (event) => {
    setUserData({ ...userData, age: event.target.value });
  };
  const onNationChange = (event) => {
    setUserData({ ...userData, nationality: event.target.value });
  };
  const onSaveDataHandler = async (name, age, nationality) => {
    const response = await fetch(`${host}/adduser`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, age, nationality }),
    });
    // printing data of created user
    console.log("response", await response.json());
    getDataFromAPI();
  };

  return (
    <AddDataContainer>
      <h2>Enter Data to Database : </h2>
      <label htmlFor="name">Enter Name</label>
      <br />
      <input type="text" name="name" id="name" onChange={onNameChange} />
      <br />

      <label htmlFor="age">Enter Age</label>
      <br />
      <input type="number" name="age" id="age" onChange={onAgeChange} />
      <br />
      <label htmlFor="nation">Enter Nationality</label>
      <br />
      <input type="text" name="nation" id="nation" onChange={onNationChange} />
      <br />
      <button
        onClick={() =>
          onSaveDataHandler(userData.name, userData.age, userData.nationality)
        }
      >
        Save Data
      </button>
      <DeleteData />
    </AddDataContainer>
  );
};

export default AddData;

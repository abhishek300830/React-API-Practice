import React, { useContext } from "react";
import { DeleteDataContainer } from "../addData/addStyle";
import dataContext from "../../context/dataContext";

const DeleteData = () => {
  const { host, AllUserData, idToDelete, setIdToDelete, getDataFromAPI } =
    useContext(dataContext);

  const onSerialORNameHandle = (event) => {
    if (isNaN(event.target.value)) {
      // Name
      let userID = AllUserData.find((val) => {
        return val.name === event.target.value;
      });
      if (userID) {
        setIdToDelete(userID._id);
      } else {
        setIdToDelete(null);
      }
    } else {
      // serial No
      let userID = AllUserData.find((val, idx) => {
        return parseInt(event.target.value) === idx;
      });
      if (userID) {
        setIdToDelete(userID._id);
      } else {
        setIdToDelete(null);
      }
    }
  };
  const onDeleteHandler = async () => {
    if (idToDelete === undefined) {
      document.getElementById("showMsg").innerHTML = "NO User Found";
    } else {
      const response = await fetch(`${host}/deleteuser/${idToDelete}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      const DataResponse = await response.json();

      console.log("DataResponse ", DataResponse);

      // calling this to update table
      if (DataResponse.msg === "User Deleted") {
        getDataFromAPI();
        document.getElementById("showMsg").innerHTML = "User Deleted";
      }
    }
  };
  return (
    <DeleteDataContainer>
      <h2>Delete Data From DataBase</h2>
      <label htmlFor="serial">Enter Serial No or Name</label>
      <br />
      <input
        type="text"
        name="serial"
        id="serial"
        onChange={onSerialORNameHandle}
      />
      <br />
      <button onClick={onDeleteHandler}>Delete User</button>
      <br />
      <span id="showMsg"></span>
    </DeleteDataContainer>
  );
};

export default DeleteData;

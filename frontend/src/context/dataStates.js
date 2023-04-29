import dataContext from "./dataContext";
import { useState } from "react";

const DataStateStore = (props) => {
  // host
  const host = "http://localhost:5000";
  const [userData, setUserData] = useState({
    name: "",
    age: 0,
    nationality: "",
  });

  const [AllUserData, setAllUserData] = useState([]);

  // ID to delete data
  const [idToDelete, setIdToDelete] = useState();

  // get data from database
  const getDataFromAPI = async () => {
    const response = await fetch(`${host}/getusers`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const AllData = await response.json();
    setAllUserData(AllData);
  };

  return (
    <dataContext.Provider
      value={{
        // values
        userData,
        setUserData,
        host,
        AllUserData,
        setAllUserData,
        getDataFromAPI,
        idToDelete,
        setIdToDelete,
      }}
    >
      {props.children}
    </dataContext.Provider>
  );
};

export default DataStateStore;

import React, { useContext, useEffect } from "react";
import DisplayContainer from "./displayStyle";
import dataContext from "../../context/dataContext";

const DisplayData = () => {
  const { AllUserData, getDataFromAPI } = useContext(dataContext);

  useEffect(() => {
    getDataFromAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DisplayContainer>
      <h2>User Data Saved in Database</h2>
      <table>
        <thead>
          <tr>
            <th>Sr. NO</th>
            <th>Name</th>
            <th>Age</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
          {AllUserData &&
            AllUserData.map((val, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx}</td>
                  <td>{val.name}</td>
                  <td>{val.age}</td>
                  <td>{val.nationality}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </DisplayContainer>
  );
};

export default DisplayData;

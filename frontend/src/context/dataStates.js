import dataContext from "./dataContext";
import { useState } from "react";

const DataStateStore = (props) => {
  console.log("props", props);

  const [data, setData] = useState();

  return (
    <dataContext.Provider
      value={{
        // values
        data,
        setData,
      }}
    >
      {props.children}
    </dataContext.Provider>
  );
};

export default DataStateStore;

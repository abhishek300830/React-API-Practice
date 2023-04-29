import React from "react";
import HomepageContainer from "./homepageStyle";
import DisplayData from "../displayData/DisplayData";
import AddData from "../addData/AddData";

const Homepage = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          background: "black",
          color: "white",
          margin: "0",
          padding: "20px",
        }}
      >
        Demonstration of API using NodeJS and MongoDB
      </h1>
      <HomepageContainer>
        {/* component with display Data */}
        <DisplayData />
        <AddData />
      </HomepageContainer>
    </>
  );
};

export default Homepage;

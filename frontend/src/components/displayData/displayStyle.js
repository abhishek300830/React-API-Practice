import styled from "styled-components";

const DisplayContainer = styled.div`
  text-align: center;
  /* height: 500px; */
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  table,
  th,
  td {
    margin: auto;
    padding: 10px;
    border: 1px solid black;
  }
`;

export default DisplayContainer;

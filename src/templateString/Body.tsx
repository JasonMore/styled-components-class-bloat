import { box } from "../styles/box.styles";
import React from "react";
import styled from "styled-components";

const BoxDiv = styled.div`
  ${box}
`;

const Body: React.FC = () => {
  return (
    <BoxDiv>
      <ul>
        <li>Lorem Ipsum</li>
        <li>Lorem Ipsum</li>
      </ul>
    </BoxDiv>
  );
};

export default Body;

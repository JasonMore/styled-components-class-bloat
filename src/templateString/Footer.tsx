import {box} from "../styles/box.styles";
import React from "react";
import styled from "styled-components";

const BoxDiv = styled.div`
  ${box}
`;

const Footer: React.FC = () => {
  return (
    <BoxDiv>
      <p>Lorem Ipsum</p>
      <p>Lorem Ipsum</p>
    </BoxDiv>
  );
};

export default Footer
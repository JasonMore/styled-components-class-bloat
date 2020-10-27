import React from "react";
import { BoxDiv } from "../styles/box.styles";
import styled from "styled-components";

const BoxRedDiv = styled(BoxDiv)`
  border: 1rem red solid;
`;

const Title: React.FC = () => {
  return (
    <BoxRedDiv>
      <h1>Hello World</h1>
      <h2>The first lines you always write</h2>
    </BoxRedDiv>
  );
};

export default Title;

import styled from "styled-components";
import React from "react";
import {
  blackBoarder,
  blueBoarder,
  greenBoarder,
  margin2Rem,
  redBoarder,
} from "../styles/box.styles";

const BlueContainer = styled.div`
  padding: 1rem;
  ${blueBoarder};
`;

const RedBox = styled.div`
  ${margin2Rem}
  ${redBoarder}
`;

const GreenBox = styled.div`
  ${margin2Rem}
  ${greenBoarder}
`;

const BlackBox = styled.div`
  ${margin2Rem}
  ${blackBoarder}
`;

const HelloWorldExtend: React.FC = () => {
  return (
    <BlueContainer>
      <RedBox>
        <h1>Hello World</h1>
        <h2>The first lines you always write</h2>
      </RedBox>
      <GreenBox>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
      </GreenBox>
      <BlackBox>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
      </BlackBox>
    </BlueContainer>
  );
};

export default HelloWorldExtend;

import styled from "styled-components";
import React from "react";
import {
  blackBoarder,
  blueBoarder,
  BoxDiv,
  greenBoarder,
  redBoarder,
} from "../styles/box.styles";

const PageContainer = styled.div`
  padding: 1rem;
  ${blueBoarder};
`;

const RedBox = styled(BoxDiv)`
  ${redBoarder}
`;

const GreenBox = styled(BoxDiv)`
  ${greenBoarder}
`;

const BlackBox = styled(BoxDiv)`
  ${blackBoarder}
`;

const HelloWorldTemplateString: React.FC = () => {
  return (
    <PageContainer>
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
    </PageContainer>
  );
};

export default HelloWorldTemplateString;

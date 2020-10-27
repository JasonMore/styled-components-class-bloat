import styled from "styled-components";
import React from "react";
import Title from "./Title";
import Footer from "./Footer";
import Body from "./Body";

const PageContainer = styled.div`
  padding: 1rem;
`;

const HelloWorldExtend: React.FC = () => {
  return (
    <PageContainer>
      <Title/>
      <Body/>
      <Footer/>
    </PageContainer>
  );
};

export default HelloWorldExtend;

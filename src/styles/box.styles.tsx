import styled from "styled-components";

// prettier doesn't know to style this 😫
export const box = `
     margin: 2rem;
 border: 1rem green solid;
`;

// prettier will always reformat this correctly
export const BoxDiv = styled.div`
  margin: 2rem;
  border: 1rem green solid;
`;

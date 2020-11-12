# Styled-Components class bloat

Shows an example of how using too many string templates as mixins vs [the documented way of extending styles](https://styled-components.com/docs/basics#extending-styles) will lead to bloat

bad [templateString/Body.tsx ](https://github.com/JasonMore/styled-components-class-bloat/blob/main/src/templateString/Body.tsx) http://localhost:3000/?whichComponent=templateString

```typescript jsx
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
```

<img width="1619" alt="Screen Shot 2020-10-27 at 1 12 45 PM" src="https://user-images.githubusercontent.com/383719/97347895-6d504600-185b-11eb-9f61-4a9583365eb0.png">

good [extend/Body.tsx](https://github.com/JasonMore/styled-components-class-bloat/blob/main/src/extend/Body.tsx) http://localhost:3000/?whichComponent=extend

```typescript jsx
import { BoxDiv } from "../styles/box.styles";
import React from "react";

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
```

<img width="1620" alt="Screen Shot 2020-10-27 at 1 12 16 PM" src="https://user-images.githubusercontent.com/383719/97348028-983a9a00-185b-11eb-9e49-e42bde3198f1.png">

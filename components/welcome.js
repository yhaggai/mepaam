import React from 'react';
import styled from '@emotion/styled'

const StyledWelcome = styled.article`
  background-image: url("../static/background.jpg");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Headline = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 6rem;
  color: white;
  letter-spacing: 0.3em;
  font-weight:200;
`;

const Subtitle = styled.h2`
  font-size: 4rem;
  font-weight: 200;
`;

const Welcome = () => {
  return (
    <StyledWelcome>
      <Headline>
        <Title>מחדשים קשר</Title>
        <Subtitle>תת כותרת</Subtitle>
      </Headline>
    </StyledWelcome>
  );
};

export default Welcome;
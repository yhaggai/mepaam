import React from 'react';
import styled from '@emotion/styled'
import Nav from './Nav';

const HeaderStyles = styled.header`
  background-color: #0f3d89;
  padding: 0 2rem;
`

const Header = () => {
  return (
    <HeaderStyles>
      <Nav />
    </HeaderStyles>
  );
};

export default Header;
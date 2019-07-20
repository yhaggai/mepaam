import React from 'react';
import styled from '@emotion/styled'
import Nav from './nav';

const HeaderStyles = styled.header`
  background-color: #0f3d89;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
`

const Logo = styled.img`
  width: 86px;
  height: 86px;
  align-self: center;
`

const Header = () => {
  return (
    <HeaderStyles>
      <Nav />
      <Logo src="../static/felt-logo.png" />
    </HeaderStyles>
  )
}

export default Header;
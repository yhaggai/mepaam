import React from 'react'
import styled from '@emotion/styled'

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  align-items: stretch; 
  ul {
    display: grid;
    grid-auto-flow: column;
    grid-column: -1;
    gap: 16px;
    list-style: none;
    font-size: 3rem;
  }
  li {
    color: #fff;
  }
`;

const Nav = () => (
  <StyledNav>
    <ul>
      <li><a>בית</a></li>
      <li><a>האתגר</a></li>
    </ul>
  </StyledNav>
)

export default Nav

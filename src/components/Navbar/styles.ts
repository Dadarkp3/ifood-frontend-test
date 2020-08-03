import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: center;

  @media (min-width: 1025px) {
    justify-content: flex-start;
  }
`;

export const Logo = styled.img`
  height: 50px;
`;

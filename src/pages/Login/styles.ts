import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 79vh;

  @media (min-width: 1025px) {
    flex-flow: row;
  }
`;

export const Logo = styled.img`
  max-width: 60%;
  min-width: 200px;
  margin: 0 0 2rem 0;
`;

export const ImageContainer = styled.div`
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }

  @media (min-width: 1025px) {
    height: 73vh;
  }
`;

export const AcessLogin = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  .card {
    -webkit-box-shadow: -1px -2px 16px -4px rgba(217, 217, 217, 1);
    -moz-box-shadow: -1px -2px 16px -4px rgba(217, 217, 217, 1);
    box-shadow: -1px -2px 16px -4px rgba(217, 217, 217, 1);
    display: flex;
    flex-flow: column;
    padding: 2rem;
    border-radius: 12px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    max-width: 600px;
    min-height: 47vh;
    background-color: #ffffff;

    h1 {
      color: #ea202f;
      font-weight: 400;
    }
    h2 {
      font-weight: 300;
      font-size: 15px;
      margin: 1rem 0;
      color: #717171;
    }

    button {
      cursor: pointer;
      width: fit-content;
      align-self: center;
      padding: 0.4rem 3rem;
      border-radius: 19px;
      color: white;
      background-color: #ea202f;
      border: none;
      &:hover {
        background-color: ${shade(0.4, '#ea202f')};
      }
    }
  }

  @media (min-width: 1025px) {
    width: 65vw;
  }
`;

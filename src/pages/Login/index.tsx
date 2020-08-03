import React from 'react';

import image from '../../assets/img/music.svg';
import logo from '../../assets/img/logo.png';

import { Container, ImageContainer, AcessLogin, Logo } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <ImageContainer>
        <img src={image} alt="Dancing music" />
      </ImageContainer>
      <AcessLogin>
        <div className="card">
          <Logo src={logo} />
          <h2>
            O melhor lugar para ficar enquanto sua comida está a caminho. Relaxe
            com uma seleção de m´úsicas especiais para você balançar a cabeça e
            enganar o estômago.
          </h2>
          <button type="button">Acessar</button>
        </div>
      </AcessLogin>
    </Container>
  );
};

export default Login;

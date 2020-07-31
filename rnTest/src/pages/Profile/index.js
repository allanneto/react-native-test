import React from 'react';

import * as Styled from './styles';

const Profile = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Avatar />
        <Styled.Label>Nome</Styled.Label>
        <Styled.Input placeholder="Allan Neto" />
        <Styled.Label>E-mail</Styled.Label>
        <Styled.Input placeholder="allan.allan.com" />
        <Styled.Label>Descrição</Styled.Label>
        <Styled.Input placeholder="twitch.tv/toramaru08" />
        <Styled.Button>
          <Styled.ButtonText>Atualizar</Styled.ButtonText>
        </Styled.Button>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Profile;

import React from 'react';

import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Avatar />
        <Styled.HWrapper>
          <Styled.Name>Allan Neto</Styled.Name>
          <Styled.Status>twitch.tv/toramaru08 - (online)</Styled.Status>
        </Styled.HWrapper>
      </Styled.Header>
      <Styled.Content>
        <Styled.Friend
          activeOpacity={0.6}
          onPress={() => navigation.navigate('Friends')}>
          <Styled.FriendAvatar size={30} />
          <Styled.HWrapper>
            <Styled.Name>Marquinhos Moraes</Styled.Name>
            <Styled.Status>FFF - offline desde 29/10</Styled.Status>
          </Styled.HWrapper>
          <Styled.ArrowIcon size={30} />
        </Styled.Friend>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Dashboard;

import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  padding: 20px;
  flex: 1;
  background: #eab948;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid;

  elevation: 3;

  border-radius: 5px;
  padding: 10px 10px;

  background: #fff;
`;

export const Content = styled.View`
  margin: 20px 0px;
`;

export const HWrapper = styled.View``;

export const Avatar = styled.View`
  width: 80px;
  height: 80px;

  background: #ccc;
  border-radius: 40px;
  margin-right: 20px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-right: 10px;
`;

export const Friend = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 5px 10px;

  background: #fff;

  border: 1px solid;
  margin: 5px 0px;
  border-radius: 5px;
`;

export const FriendAvatar = styled(Icon).attrs({
  name: 'person',
})`
  margin-right: 5px;
`;

export const Status = styled.Text`
  font-size: 14px;
`;

export const ArrowIcon = styled(Icon).attrs({
  name: 'keyboard-arrow-right',
})`
  margin-left: auto;
`;

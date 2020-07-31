import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  border: 1px;
  flex: 1;
  background: #eab948;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.View`
  width: 150px;
  height: 150px;

  border-radius: 75px;
  background: #fffaff;
  elevation: 10;

  margin-bottom: 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#191716',
})`
  width: 100%;
  padding: 5px 10px;
  background: #fff;

  font-size: 16px;

  border-radius: 4px;

  elevation: 5;
  color: #000;

  margin: 5px 0px 15px 0px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #191716;
  font-weight: bold;

  align-self: flex-start;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 40px;

  background: #584cbd;

  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

import styled from "styled-components/native";
import { colorBlue, colorNeutral, colorWhite } from "../../style/colors";
import { spacing0, spacing1, spacing3, spacing4 } from "../../style/spacing";
import { Text } from "react-native-paper";

export const StyledPage = styled.View`
  background: ${colorWhite};
`;

export const StyledImage = styled.Image`
  padding: ${spacing1};
  object-fit: contain;
  height: 200px;
`;

export const StyledContent = styled.View`
  background-color: ${colorNeutral};
  height: 100%;
  padding: ${spacing3} ${spacing1};
`;

export const StyledCategory = styled.Text`
  margin: -35px auto 0;
  background: ${colorBlue};
  border-radius: 15px;
  padding: ${spacing0} ${spacing3};
  color: ${colorWhite};
  font-weight: bold;
`;

export const StyledDescription = styled(Text)`
  margin-top: ${spacing3};
`;

export const StyledQuantity = styled(Text)`
  font-weight: bold;
  margin: ${spacing4} 0 ${spacing1};
`;

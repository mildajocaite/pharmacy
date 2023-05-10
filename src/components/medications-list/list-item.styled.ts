import styled from "styled-components/native";
import { colorWhite } from "../../style/colors";
import { spacing0 } from "../../style/spacing";
import { Card } from "react-native-paper";

export const StyledImage = styled.Image`
  max-width: 30px;
  max-height: 30px;
`;

export const StyledCard = styled(Card.Title)`
  background: ${colorWhite};
  border-radius: 4px;
  margin: ${spacing0} 0;
`;

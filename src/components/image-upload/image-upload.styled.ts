import styled from "styled-components/native";
import { Text } from "react-native-paper";
import { spacing1, spacing2, spacing3, spacing4 } from "../../style/spacing";

export const StyledLabel = styled(Text)`
  margin-top: ${spacing2};
  margin-bottom: ${spacing1};
`;

export const StyledImage = styled.Image`
  margin: ${spacing3} ${spacing4};
  max-width: 100%;
  object-fit: contain;
  height: 200px;
`;

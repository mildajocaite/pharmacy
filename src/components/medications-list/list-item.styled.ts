import styled from "styled-components/native";
import { colorGrey, colorWhite } from "../../style/colors";
import { spacing0, spacing1 } from "../../style/spacing";

export const StyledCard = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${colorWhite};
  border-radius: 4px;
  margin: ${spacing0} 0;
  padding: ${spacing1};
`;

export const StyledContent = styled.View`
  margin-left: ${spacing1};
  flex: 1 1 auto;
`;

export const StyledTitle = styled.Text`
  font-weight: bold;
  margin-bottom: ${spacing0};
  font-size: 16px;
`;

export const StyledSubtitle = styled.Text`
  font-size: 12px;
  color: ${colorGrey};
`;

export const StyledImage = styled.Image`
  max-width: 30px;
  max-height: 30px;
`;

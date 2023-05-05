import styled from "styled-components/native";
import { spacing0, spacing1, spacing2, spacing7 } from "../../style/spacing";
import { colorGrey, colorWhite } from "../../style/colors";

export const StyledList = styled.View`
  margin: ${spacing1} ${spacing1} ${spacing7};
`;

export const StyledSearchBar = styled.TextInput`
  height: 40px;
  border-radius: 4px;
  padding: ${spacing0} ${spacing2};
  margin-bottom: ${spacing1};
  border: 1px solid ${colorGrey};
  background: ${colorWhite};
`;

import styled from "styled-components/native";
import { spacing1, spacing7 } from "../../style/spacing";
import { Searchbar } from "react-native-paper";

export const StyledList = styled.View`
  margin: ${spacing1} ${spacing1} ${spacing7};
`;

export const StyledSearchBar = styled(Searchbar)`
  margin-bottom: ${spacing1};
`;

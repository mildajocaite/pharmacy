import { Switch } from "react-native";
import styled from "styled-components/native";
import { spacing0, spacing1, spacing3 } from "../../style/spacing";
import { colorGrey } from "../../style/colors";
import { fontHeading1 } from "../../style/font";

export const StyledView = styled.ScrollView`
  margin: ${spacing1};
`;

export const StyledLabel = styled.Text`
  font-size: ${fontHeading1};
`;

export const StyledTextInput = styled.TextInput`
  margin-top: ${spacing0};
  margin-bottom: ${spacing3};
  border: 2px solid ${colorGrey};
  padding: ${spacing1};
  border-radius: 4px;
`;

export const StyledField = styled.View`
  margin-bottom: ${spacing3};
`;

export const StyledSwitch = styled(Switch)`
  margin-right: auto;
`;

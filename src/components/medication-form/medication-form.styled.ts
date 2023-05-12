import { Button, Switch, TextInput } from "react-native-paper";
import styled from "styled-components/native";
import { spacing1, spacing2, spacing3 } from "../../style/spacing";

export const StyledView = styled.ScrollView`
  margin: ${spacing1};
`;

export const StyledTextInput = styled(TextInput)`
  margin: ${spacing1} 0;
`;

export const StyledDropDownField = styled.View`
  margin: ${spacing1} 0 ${spacing2};
`;

export const StyledSwitch = styled(Switch)`
  margin-right: auto;
`;

export const StyledButton = styled(Button)`
  margin: ${spacing3} auto ${spacing2};
`;

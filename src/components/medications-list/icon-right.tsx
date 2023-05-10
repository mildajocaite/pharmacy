import { IconButton } from "react-native-paper";
import React, { FC } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Pages } from "../../services/navigation-service";
import { RootStackParamList } from "../../app-screens";

interface Props {
  id: number;
}

export const IconRight: FC<Props> = (props) => {
  const { id } = props;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <IconButton
      icon="arrow-right"
      onPress={() => navigation.navigate(Pages.MEDICATION_DETAILS, { id })}
    />
  );
};

import React, { FC } from "react";
import { IconButton } from "react-native-paper";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../app-screens";
import { Pages } from "../../services/navigation-service";

interface Props {
  id: number;
}

export const EditMedicationButton: FC<Props> = (props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { id } = props;

  return (
    <IconButton
      icon="pencil"
      size={23}
      onPress={() => navigation.navigate(Pages.EDIT_MEDICATION, { id })}
    />
  );
};

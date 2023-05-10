import React, { FC } from "react";
import { IconButton } from "react-native-paper";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Pages } from "../../services/navigation-service";
import { RootStackParamList } from "../../app-screens";

export const AddNewMedicationButton: FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <IconButton
      icon="plus"
      size={23}
      onPress={() => navigation.navigate(Pages.CREATE_NEW_MEDICATION)}
    />
  );
};

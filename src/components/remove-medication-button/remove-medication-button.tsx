import React, { FC } from "react";
import { IconButton } from "react-native-paper";
import { useDispatch } from "react-redux";
import { removeMedication } from "../../redux/medication-slice";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../app-screens";
import { Pages } from "../../services/navigation-service";

interface Props {
  id: number;
}

export const RemoveMedicationButton: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { id } = props;

  return (
    <>
      <IconButton
        icon="delete"
        size={23}
        onPress={() => {
          navigation.navigate(Pages.HOME);
          dispatch(removeMedication(id));
        }}
      />
    </>
  );
};

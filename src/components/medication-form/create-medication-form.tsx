import React, { FC } from "react";
import { MedicationForm } from "./medication-form";
import { Medication } from "../../model/medication";
import { Pages } from "../../services/navigation-service";
import { useDispatch } from "react-redux";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../app-screens";
import { translations } from "../../translations";
import { addMedication } from "../../redux/medication-slice";

export const CreateMedicationForm: FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onSubmit = (data: Medication) => {
    dispatch(addMedication(data));
    navigation.navigate(Pages.HOME);
  };

  return (
    <MedicationForm
      initialValues={{ expired: false }}
      onSubmit={onSubmit}
      buttonLabel={translations.pages.addNewMedication.submit}
    />
  );
};

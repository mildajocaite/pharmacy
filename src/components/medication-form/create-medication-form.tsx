import React, { FC } from "react";
import { MedicationForm } from "./medication-form";
import { Medication } from "../../model/medication";
import { setMedications } from "../../redux/medication-slice";
import { Pages } from "../../services/navigation-service";
import { useDispatch, useSelector } from "react-redux";
import { getMedications } from "../../redux/medication-selector";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../app-screens";
import { translations } from "../../translations";

export const CreateMedicationForm: FC = () => {
  const dispatch = useDispatch();
  const medications = useSelector(getMedications);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onSubmit = (data: Medication) => {
    dispatch(setMedications([...medications, data]));
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

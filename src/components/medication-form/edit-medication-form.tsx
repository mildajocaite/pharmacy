import React, { FC } from "react";
import { MedicationForm } from "./medication-form";
import { Medication } from "../../model/medication";
import { Pages } from "../../services/navigation-service";
import { useDispatch, useSelector } from "react-redux";
import { getMedications } from "../../redux/medication-selector";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../app-screens";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MedicationUtils } from "../../utils/medication-utils";
import { editMedication } from "../../redux/medication-slice";
import { translations } from "../../translations";

type Props = NativeStackScreenProps<RootStackParamList, Pages.EDIT_MEDICATION>;

export const EditMedicationForm: FC<Props> = (props) => {
  const {
    route: {
      params: { id },
    },
  } = props;
  const dispatch = useDispatch();
  const medications = useSelector(getMedications);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onSubmit = (data: Medication) => {
    dispatch(editMedication(data));
    navigation.navigate(Pages.HOME);
  };

  return (
    <MedicationForm
      initialValues={MedicationUtils.findById(medications, id)}
      onSubmit={onSubmit}
      buttonLabel={translations.pages.addNewMedication.update}
    />
  );
};

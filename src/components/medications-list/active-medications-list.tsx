import React, { FC } from "react";
import { MedicationsList } from "./medications-list";
import { useSelector } from "react-redux";
import { MedicationUtils } from "../../utils/medication-utils";
import { getMedications } from "../../redux/medication-selector";

export const ActiveMedicationsList: FC = () => {
  const medications = useSelector(getMedications);

  return (
    <MedicationsList
      medications={MedicationUtils.filterUnexpiredMedications(medications)}
    />
  );
};

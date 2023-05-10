import React, { FC } from "react";
import { MedicationsList } from "./medications-list";
import { Category } from "../../model/category";
import { MedicationUtils } from "../../utils/medication-utils";
import { useSelector } from "react-redux";
import { getMedications } from "../../redux/medication-selector";

export const AntibioticsList: FC = () => {
  const medications = useSelector(getMedications);

  return (
    <MedicationsList
      medications={MedicationUtils.filterByCategory(
        medications,
        Category.ANTIBIOTICS
      )}
    />
  );
};

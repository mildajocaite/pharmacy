import React, { FC } from "react";
import { MedicationsList } from "./medications-list";
import { getItems } from "../../redux/item-selector";
import { useSelector } from "react-redux";

export const ActiveMedicationsList: FC = () => {
  const items = useSelector(getItems);

  return <MedicationsList items={items.filter((item) => !item.expired)} />;
};

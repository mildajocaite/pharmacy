import React, { FC } from "react";
import { MedicationsList } from "./medications-list";
import { items } from "../../static/items";
import { Category } from "../../model/category";

export const AntibioticsList: FC = () => {
  // const items = useSelector(getItems);

  return (
    <MedicationsList
      items={items.filter((item) => item.category === Category.ANTIBIOTICS)}
    />
  );
};

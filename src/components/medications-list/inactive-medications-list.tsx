import React, { FC } from "react";
import { MedicationsList } from "./medications-list";
import { items } from "../../static/items";

export const InactiveMedicationsList: FC = () => {
  // const items = useSelector(getItems);

  return <MedicationsList items={items.filter((item) => item.expired)} />;
};

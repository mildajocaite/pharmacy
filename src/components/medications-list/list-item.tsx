import React, { FC } from "react";
import { Medication } from "../../model/medication";
import { renderIcon } from "./icon-mapper";
import { StyledCard } from "./list-item.styled";
import { IconRight } from "./icon-right";

interface Props {
  medication: Medication;
}

export const ListItem: FC<Props> = (props) => {
  const {
    medication: { id, title, category, diagnosis },
  } = props;

  return (
    <StyledCard
      title={title}
      subtitle={diagnosis}
      left={() => renderIcon(category)}
      right={() => <IconRight id={id} />}
    />
  );
};

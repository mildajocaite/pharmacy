import React, { FC } from "react";
import { Item } from "../../model/item";
import {
  StyledCard,
  StyledContent,
  StyledSubtitle,
  StyledTitle,
} from "./list-item.styled";
import { AntDesign } from "@expo/vector-icons";
import { colorGrey } from "../../style/colors";
import { renderIcon } from "./icon-mapper";

interface Props {
  item: Item;
}

export const ListItem: FC<Props> = (props) => {
  const {
    item: { title, category, diagnosis },
  } = props;

  return (
    <StyledCard>
      {renderIcon(category)}
      <StyledContent>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{diagnosis}</StyledSubtitle>
      </StyledContent>
      <AntDesign name="right" size={24} color={colorGrey} />
    </StyledCard>
  );
};

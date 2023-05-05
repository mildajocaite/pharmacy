import React from "react";
import { Category } from "../../model/category";
import { StyledImage } from "./list-item.styled";

export const renderIcon = (category: Category) => {
  switch (category) {
    case Category.ANALGESICS:
      return <StyledImage source={require("../../resources/headache.png")} />;
    case Category.FEVER:
      return <StyledImage source={require("../../resources/sick.png")} />;
    case Category.THROAT_PAIN:
      return (
        <StyledImage source={require("../../resources/sore-throat.png")} />
      );
    case Category.VITAMINS:
      return <StyledImage source={require("../../resources/vitamins.png")} />;
    case Category.ANTIBIOTICS:
      return <StyledImage source={require("../../resources/antibiotic.png")} />;
    case Category.DIGESTIVE:
      return <StyledImage source={require("../../resources/diarrhea.png")} />;
  }
};

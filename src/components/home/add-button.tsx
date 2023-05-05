import React, { FC } from "react";
import { StyledView } from "./add-button.styled";
import { Link } from "@react-navigation/native";
import { Pages } from "../../services/navigation-service";
import { AntDesign } from "@expo/vector-icons";

export const AddButton: FC = () => (
  <StyledView>
    <Link to={{ screen: Pages.CREATE_NEW_MEDICATION }}>
      <AntDesign name="plus" size={24} color="black" />
    </Link>
  </StyledView>
);

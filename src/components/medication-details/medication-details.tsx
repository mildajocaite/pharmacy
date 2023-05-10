import React, { FC } from "react";
import {
  StyledCategory,
  StyledContent,
  StyledDescription,
  StyledImage,
  StyledPage,
  StyledQuantity,
} from "./medication-details.styled";
import { Text } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { MedicationUtils } from "../../utils/medication-utils";
import { translations } from "../../translations";
import { Pages } from "../../services/navigation-service";
import { RootStackParamList } from "../../app-screens";
import { getMedications } from "../../redux/medication-selector";

type Props = NativeStackScreenProps<
  RootStackParamList,
  Pages.MEDICATION_DETAILS
>;

export const MedicationDetails: FC<Props> = (props) => {
  const medications = useSelector(getMedications);
  const {
    route: {
      params: { id },
    },
  } = props;
  const { description, category, amount, imageUri } = MedicationUtils.findById(
    medications,
    id
  );

  return (
    <StyledPage>
      <StyledImage
        source={{
          uri: imageUri,
        }}
      />
      <StyledContent>
        <StyledCategory>{translations.categories[category]}</StyledCategory>
        <StyledDescription variant="bodyMedium">
          {description}
        </StyledDescription>
        <StyledQuantity variant="bodyMedium">
          {translations.pages.medicationDetails.quantity}
        </StyledQuantity>
        <Text variant="bodyMedium">{amount}</Text>
      </StyledContent>
    </StyledPage>
  );
};

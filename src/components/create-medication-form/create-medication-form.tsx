import React, { FC, useState } from "react";
import { Text } from "react-native-paper";
import { Controller, useForm } from "react-hook-form";
import { Category } from "../../model/category";
import {
  StyledButton,
  StyledDropDownField,
  StyledSwitch,
  StyledTextInput,
  StyledView,
} from "./create-medication-form.styled";
import { useDispatch, useSelector } from "react-redux";
import { Medication } from "../../model/medication";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { translations } from "../../translations";
import DropDown from "react-native-paper-dropdown";
import { Pages } from "../../services/navigation-service";
import { setMedications } from "../../redux/medication-slice";
import { getMedications } from "../../redux/medication-selector";
import { RootStackParamList } from "../../app-screens";
import { ImageUpload } from "../image-upload/image-upload";

export const CreateMedicationForm: FC = () => {
  const dispatch = useDispatch();
  const medications = useSelector(getMedications);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [showDropDown, setShowDropDown] = useState(false);
  const [showAmount, setShowAmount] = useState(true);
  const { control, handleSubmit, setValue, getValues } = useForm<Medication>({
    defaultValues: {
      expired: false,
    },
  });

  const onSubmit = (data: Medication) => {
    dispatch(setMedications([...medications, data]));
    navigation.navigate(Pages.HOME);
  };

  return (
    <StyledView>
      <Controller
        name="title"
        control={control}
        render={({ field: { value, onBlur, onChange } }) => (
          <StyledTextInput
            label={translations.pages.addNewMedication.fields.name}
            mode="outlined"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      <StyledDropDownField>
        <Controller
          name="category"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DropDown
              label={translations.pages.addNewMedication.fields.category}
              mode="outlined"
              list={Object.values(Category).map((category) => ({
                value: category,
                label: translations.categories[category],
              }))}
              value={value}
              setValue={onChange}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
            />
          )}
        />
      </StyledDropDownField>
      <Text>{translations.pages.addNewMedication.fields.expired}</Text>
      <Controller
        name="expired"
        control={control}
        render={({ field: { value, onChange } }) => (
          <StyledSwitch
            onValueChange={(expired) => {
              setShowAmount(!expired);
              onChange(expired);
            }}
            value={value}
          />
        )}
      />
      {showAmount && (
        <Controller
          name="amount"
          control={control}
          render={({ field: { value, onBlur, onChange } }) => (
            <StyledTextInput
              label={translations.pages.addNewMedication.fields.amount}
              mode="outlined"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
      )}
      <Controller
        name="diagnosis"
        control={control}
        render={({ field: { value, onBlur, onChange } }) => (
          <StyledTextInput
            label={translations.pages.addNewMedication.fields.diagnosis}
            mode="outlined"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field: { value, onBlur, onChange } }) => (
          <StyledTextInput
            label={translations.pages.addNewMedication.fields.description}
            mode="outlined"
            value={value}
            onChangeText={onChange}
            multiline
            numberOfLines={6}
            maxLength={60}
            onBlur={onBlur}
          />
        )}
      />
      <Controller
        name="imageUri"
        control={control}
        render={({ field: { value, onChange } }) => (
          <ImageUpload image={value} setImage={onChange} />
        )}
      />
      <StyledButton mode="contained" onPress={handleSubmit(onSubmit)}>
        {translations.pages.addNewMedication.submit}
      </StyledButton>
    </StyledView>
  );
};

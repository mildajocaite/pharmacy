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
} from "./medication-form.styled";
import { Medication } from "../../model/medication";
import { translations } from "../../translations";
import DropDown from "react-native-paper-dropdown";
import { ImageUpload } from "../image-upload/image-upload";

interface Props {
  initialValues: Partial<Medication>;
  onSubmit: (values: Medication) => void;
  buttonLabel: string;
}

export const MedicationForm: FC<Props> = (props) => {
  const { initialValues, onSubmit, buttonLabel } = props;
  const [showDropDown, setShowDropDown] = useState(false);
  const [showAmount, setShowAmount] = useState(true);
  const { control, handleSubmit } = useForm<Medication>({
    defaultValues: initialValues,
  });

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
            maxLength={600}
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
        {buttonLabel}
      </StyledButton>
    </StyledView>
  );
};

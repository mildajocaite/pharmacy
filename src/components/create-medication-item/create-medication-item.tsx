import React, { FC, useState } from "react";
import { Button } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { Category } from "../../model/category";
import {
  StyledField,
  StyledLabel,
  StyledSwitch,
  StyledTextInput,
  StyledView,
} from "./create-medication-item.styled";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../redux/item-selector";
import { setItems } from "../../redux/item-slice";
import { Item } from "../../model/item";
import { NavigationContext } from "@react-navigation/native";
import { Pages } from "../../services/navigation-service";
import { SelectList } from "react-native-dropdown-select-list";
import { translations } from "../../translations";

export const CreateItemForm: FC = () => {
  const dispatch = useDispatch();
  const items = useSelector(getItems);
  const navigation = React.useContext(NavigationContext);
  const [showAmount, setShowAmount] = useState(false);
  const { control, handleSubmit } = useForm<Item>({
    defaultValues: {
      title: undefined,
      category: undefined,
      expired: false,
    },
  });
  const onSubmit = (data: Item) => {
    dispatch(setItems([...items, data]));
    navigation?.navigate(Pages.ACTIVE_MEDICATIONS_LIST);
  };

  return (
    <StyledView>
      <StyledLabel>
        {translations.pages.addNewMedication.fields.name}
      </StyledLabel>
      <Controller
        name="title"
        control={control}
        render={({ field: { value, onBlur, onChange } }) => (
          <StyledTextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      <StyledField>
        <StyledLabel>
          {translations.pages.addNewMedication.fields.category}
        </StyledLabel>
        <Controller
          name="category"
          control={control}
          render={({ field: { onChange } }) => (
            <SelectList
              data={Object.values(Category).map((value) => ({
                key: value,
                value: translations.categories[value],
              }))}
              setSelected={onChange}
              placeholder={translations.pages.addNewMedication.fields.choose}
              search={false}
            />
          )}
        />
      </StyledField>
      <StyledLabel>
        {translations.pages.addNewMedication.fields.expired}
      </StyledLabel>
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
        <>
          <StyledLabel>
            {translations.pages.addNewMedication.fields.amount}
          </StyledLabel>
          <Controller
            name="amount"
            control={control}
            render={({ field: { value, onBlur, onChange } }) => (
              <StyledTextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
        </>
      )}
      <StyledLabel>
        {translations.pages.addNewMedication.fields.diagnosis}
      </StyledLabel>
      <Controller
        name="diagnosis"
        control={control}
        render={({ field: { value, onBlur, onChange } }) => (
          <StyledTextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      <StyledLabel>
        {translations.pages.addNewMedication.fields.description}
      </StyledLabel>
      <Controller
        name="description"
        control={control}
        render={({ field: { value, onBlur, onChange } }) => (
          <StyledTextInput
            value={value}
            onChangeText={onChange}
            multiline
            numberOfLines={6}
            maxLength={60}
            onBlur={onBlur}
          />
        )}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </StyledView>
  );
};

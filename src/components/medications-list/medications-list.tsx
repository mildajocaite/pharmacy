import React, { FC, useState } from "react";
import { Medication } from "../../model/medication";
import { ListItem } from "./list-item";
import { FlatList, ListRenderItemInfo } from "react-native";
import { translations } from "../../translations";
import { StyledList, StyledSearchBar } from "./medications-list.styled";

interface Props {
  medications: Medication[];
}

export const MedicationsList: FC<Props> = (props) => {
  const { medications } = props;
  const [search, setSearch] = useState<string>("");

  return (
    <StyledList>
      <StyledSearchBar
        onChangeText={setSearch}
        value={search}
        underlineColorAndroid="transparent"
        mode="bar"
        placeholder={translations.pages.medicationsList.search}
      />
      <FlatList
        data={medications.filter((item) =>
          search
            ? item.title.includes(search) || item.diagnosis.includes(search)
            : item
        )}
        renderItem={(info: ListRenderItemInfo<Medication>) => (
          <ListItem medication={info.item} />
        )}
      />
    </StyledList>
  );
};

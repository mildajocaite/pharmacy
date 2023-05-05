import React, { FC, useState } from "react";
import { Item } from "../../model/item";
import { ListItem } from "./list-item";
import { FlatList, ListRenderItemInfo } from "react-native";
import { translations } from "../../translations";
import { StyledList, StyledSearchBar } from "./medications-list.styled";

interface Props {
  items: Item[];
}

export const MedicationsList: FC<Props> = (props) => {
  const { items } = props;
  const [search, setSearch] = useState<string>();

  return (
    <StyledList>
      <StyledSearchBar
        onChangeText={setSearch}
        value={search}
        underlineColorAndroid="transparent"
        placeholder={translations.pages.medicationsList.search}
      />
      <FlatList
        data={items.filter((item) =>
          search ? item.title.includes(search) : item
        )}
        renderItem={(info: ListRenderItemInfo<Item>) => (
          <ListItem item={info.item} />
        )}
      />
    </StyledList>
  );
};

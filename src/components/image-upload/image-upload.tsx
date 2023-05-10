import React, { FC } from "react";
import { View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { translations } from "../../translations";
import { StyledImage, StyledLabel } from "./image-upload.styled";
import { Button } from "react-native-paper";

interface Props {
  image: string;
  setImage: (image: string) => void;
}

export const ImageUpload: FC<Props> = (props) => {
  const { image } = props;

  const uploadImage = async () => {
    const { setImage } = props;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View>
      <StyledLabel>
        {translations.pages.addNewMedication.fields.image}
      </StyledLabel>
      <Button mode="contained-tonal" onPress={uploadImage}>
        {translations.pages.addNewMedication.fields.uploadImage}
      </Button>
      {image && <StyledImage source={{ uri: image }} />}
    </View>
  );
};

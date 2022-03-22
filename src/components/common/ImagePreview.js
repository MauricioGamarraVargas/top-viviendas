import React from "react";
import { View, Text } from "react-native";
import ImageView from "react-native-image-viewing";

const ImagePreview = ({ images, imageIndex, visible }) => {
  console.log(images)

  const show = () => {
    
  }

  return(
    <ImageView
      images={images}
      imageIndex={imageIndex}
      visible={visible}
      onRequestClose={() => false}
    />
  );
}

export {ImagePreview};

import React from "react";
import { View, Text } from "react-native";
import { ExplorerItem } from "../common";

const HomeListItem = (props) => {
  const onPressHomeDetails = () => {
    props.navigation.navigate("homeDetail", {images: props.images});
  }

  return(
    <ExplorerItem onPressHomeDetails={onPressHomeDetails}/>
  );
}

export default HomeListItem;
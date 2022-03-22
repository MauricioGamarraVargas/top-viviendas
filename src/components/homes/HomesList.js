import React, {useState} from "react";
import { View } from "react-native";
import { Card } from "../common";
import HomeListItem from "./HomeListItem";

const HomesList = (props) => {
  const [images, setImages] = useState([
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
  ]);

  return(
    <View style={{flex:1}}>
      <Card>
        <HomeListItem navigation={props.navigation} images={images}/>
      </Card>
    </View>
  )
}

export default HomesList;
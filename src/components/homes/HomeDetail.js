import React, {useState}from "react";
import {SliderBox} from "react-native-image-slider-box";
import ImageView from "react-native-image-viewing";
import { View } from "react-native";
import { Title, ButtonBottom} from "../common";
import HomeProfile from "./HomeProfile";

const HomeDetail = ({route, navigation}) => {
  const [visible, setIsVisible] = useState(false);
  const [img, setImg] = useState([]);
  const [selected, setSelected] = useState(null)

  const imgTransfor = (index) => {
    const images = route.params.images.map((e) => {
      return {uri: e}
    });

    if(!visible){
      setImg(images);
      setSelected(index);
      setIsVisible(true);
    }
  }
 
  return(
    <View style={{flex:1}}>
      <SliderBox 
        images={route.params.images} 
        onCurrentImagePressed={(index) => imgTransfor(index)}
      />
      <ImageView
        images={img}
        imageIndex={selected}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
      <HomeProfile />
      <ButtonBottom onPress={() => navigation.navigate("buyer")}/>
    </View>
  );
}

export default HomeDetail;
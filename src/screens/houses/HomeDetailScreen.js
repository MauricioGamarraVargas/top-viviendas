import React from "react";
import HomeDetail from "../../components/homes/HomeDetail";

const HomeDetailScreen = (props) => {
  return(
    <HomeDetail navigation={props.navigation} route={props.route}/>
  );
}

export default HomeDetailScreen;
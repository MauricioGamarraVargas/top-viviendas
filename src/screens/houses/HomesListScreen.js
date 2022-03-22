import React from "react";
import HomesList from "../../components/homes/HomesList";

const HomesListScreen = (props) => {
  return(
    <HomesList navigation={props.navigation} />
  )
}

export default HomesListScreen;
import React from "react";
import Buyer from "../../components/buyer/buyerInfo";

const BuyerScreen = (props) => {
  return(
    <Buyer navigation={props.navigation} route={props.route}/>
  );
}

export default BuyerScreen;
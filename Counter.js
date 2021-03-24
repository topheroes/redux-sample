import React from "react";
import {Text} from "react-native";

import {useSelector} from "react-redux";

// useDispatch
// useSelector


const Counter = ()=>{

    const number = useSelector( (state)=>state.numberReducer.number );

    return (
      <>
         <Text>Counter</Text>
         <Text>{number}</Text>
      </>
    )
  
}

export default Counter;
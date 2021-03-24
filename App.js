
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import {createStore, applyMiddleware} from "redux";
import {Provider, useDispatch} from "react-redux";

import thunk from "redux-thunk";

import {reducer, initialState} from "./reducer"
import Counter from "./Counter";
import {addNumberWithDelay} from "./actions";
import Label from "./Label";




const store = createStore(reducer, applyMiddleware(thunk));





export default function App() {

  
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
    
  );
}


const Main = ()=>{

  const dispatch = useDispatch();
 

  return (
  <View style={styles.container}>
    <Label/>
    <Counter/>
    <Text>Hehe</Text>
    
    <TouchableOpacity onPress={()=>{dispatch(addNumberWithDelay())}}><Text>Here we go</Text></TouchableOpacity>
  </View>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

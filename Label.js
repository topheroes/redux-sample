import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

import {connect} from "react-redux";
import {changeColor} from "./actions";

// connect
// state dispatch
class Label extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return (
            <>
                <TouchableOpacity onPress={()=>{this.props.change_color()}}>
                    <Text style={{color: this.props.color}}>Hello</Text>
                </TouchableOpacity>
            </>
        )

    }

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const mapStateToProps = (state)=>{
    return {
        color: state.colorReducer.color
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        change_color: ()=>dispatch(changeColor())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Label)
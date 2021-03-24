
import {ADD_NUMBER, CHANGE_COLOR} from "./type";
import {combineReducers} from "redux";
export const initialState = {
    number: 0,
    color: "red"
}


export const numberReducer = (state=initialState, action)=>{

    switch(action.type){
        case ADD_NUMBER:{
            console.log('were here')
            const newState = {...state};
            newState.number = newState.number + 1;
            return newState;

            
        }
        default:{
            return state;
        }

    }


}

export const colorReducer = (state=initialState, action)=>{
    switch(action.type){
        case CHANGE_COLOR:{
            return {...state, color: "blue"};
        }
        default:{
            return state;
        }
    }



}


export const reducer = combineReducers({colorReducer, numberReducer});
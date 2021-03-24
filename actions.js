import {ADD_NUMBER, CHANGE_COLOR} from "./type";


export const addNumberWithDelay = ()=>{

    return function(dispatch){
        setTimeout(()=>dispatch(addNumber()), 2000);
    }

}


export const changeColor = ()=>{
    return {
        type: CHANGE_COLOR
    }
}
export const addNumber = ()=>{
   
    return {
        type: ADD_NUMBER
    }
}
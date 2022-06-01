import { PLUS,DECREEMENT,INCREEMENT } from "./ActionTypes";
export const Count=()=>{
return {
    type:PLUS,
payload:1+1
}

}

export const increement =()=>{
return {

    type:INCREEMENT
}

}
export const decreement =()=>{
    return {
    
        type:DECREEMENT
    }
    
    }
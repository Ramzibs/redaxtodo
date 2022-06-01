import { PLUS,DECREEMENT,INCREEMENT  } from "./ActionTypes";
const init={
count:0,
show:true
}

const countReducer=(state=init,action)=>{
switch (action.type) {
    case PLUS:return{...state,count:action.payload}
    case INCREEMENT:return{...state,count:state.count+1}
    case DECREEMENT:return{...state,count:state.count-5}



    default: return state
}
}


export default countReducer
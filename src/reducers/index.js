import {combineReducers} from "redux";
import PostsReducer from "./PostsReducer";
import ErrorReducer from "./ErrorReducer";
import LoadingReducer from "./LoadingReducer"



const rootReducer = combineReducers({
    posts:PostsReducer, 
    error:ErrorReducer, 
    isLoading:LoadingReducer
})


export default rootReducer;

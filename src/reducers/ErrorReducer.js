import { POSTS } from "../constants";


const ErrorReducer = (state = null, action) => {
    console.log("acitons", action.error)
    switch (action.type) {
        case POSTS.POST_FAILURE:
            return action.error;
        case POSTS.LOAD:
        case POSTS.POST_SUCCESS:
            return null
        default:
            return state;
    }
}


export default ErrorReducer;
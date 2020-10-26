import { POSTS } from "../constants";


const LoadingReducer = (state = false, action) => {
    switch (action.type) {
        case POSTS.LOAD:
            return true
        case POSTS.POST_SUCCESS:
            return false
        case POSTS.POST_FAILURE:
            return false

        default:
            return state
    }
}


export default LoadingReducer;

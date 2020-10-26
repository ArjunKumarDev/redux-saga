import { POSTS } from "../constants";


const PostsReducer = (state = [], action) => {
    if (action.type === POSTS.POST_SUCCESS) {
      
        return [...state, ...action.posts]
    }

    return state;
}


export default PostsReducer;
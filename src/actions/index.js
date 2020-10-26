import { POSTS } from "../constants";


const loadPosts = () => ({
    type: POSTS.LOAD
})



// redux-thunk implementation
const fetchPosts =  () => {
    return(dispatch) => {
        fetch("https://jsonplaceholder.typicode.com/posts/").then((response) => response.json()).then((res) => {
            dispatch(setPosts(res))
        })
    }
}

const setPosts = posts => ({
    type: POSTS.POST_SUCCESS,
    posts
})

const setError = error => ({
    type: POSTS.POST_FAILURE,
    error
})


export { loadPosts, setPosts, setError,fetchPosts};
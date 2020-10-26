import {POSTS} from "../constants";
import {put,call,takeEvery} from "redux-saga/effects";
import {fetchPosts} from "../api"
import {setPosts,setError} from "../actions"



function* handlePostsLoad() {

    try{
       const posts = yield call(fetchPosts);
     
       yield put(setPosts(posts))
    }catch(error) {
      
        yield put(setError(error.toString()))
    }

}

export default function* watchPostsSaga() {
    yield takeEvery(POSTS.LOAD,handlePostsLoad)
}
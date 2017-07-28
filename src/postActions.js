import * as types from "./actionTypes";
import postAPI from "./postAPI";




export function loadPostsSuccess(posts) {
    return {type: types.LOAD_POSTS_SUCCESS, posts};
}

export function loadPosts() {
    return function(dispatch) {
        return postAPI.getAllPosts().then(posts => {
            dispatch(loadPostsSuccess(posts));
        }).catch(error => {
            throw(error);
        });
    };
}

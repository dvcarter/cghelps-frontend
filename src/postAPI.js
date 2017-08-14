class PostAPI {
    static getAllPosts() {
        return fetch("http://cghelps.dev/wp-json/wp/v2/posts/?_embed").then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default PostAPI;

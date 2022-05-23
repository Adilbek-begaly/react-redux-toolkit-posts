import React from "react";
import PostItem from "./PostItem";
import '../style/posts.css';

function PostList() {

    return (
        <div className="post-list"> 
                <PostItem />
        </div>
    )
}
export default PostList;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePosts, openPosts } from "../../features/posts/postsSlice";
import MyButton from '../UI/button/MyButton'

function PostItem () {

    const { posts } = useSelector((state) => state.post)
    const dispatch = useDispatch()

    return (
        <div className="post-wrapper">
            {posts.map(post => 
                <div className="post-item" key={post.id}>
                    <div className="items">
                        <div><strong>{post.id}. Название: </strong> {post.title}</div>
                        <div><strong>Описание: </strong> {post.body}</div>
                    </div>
                    <div className="post-btns">
                        <MyButton onClick={() => {dispatch(openPosts(post.id))}}>открыть</MyButton>
                        <MyButton onClick={() => {dispatch(removePosts(post.id))}}>удалить</MyButton>
                    </div>
                </div>
            )}
        </div>
    )
}
export default PostItem;
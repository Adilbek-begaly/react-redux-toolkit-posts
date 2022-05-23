import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../features/posts/postsSlice";
import PostList from "../posts/PostList";

const Posts = () => {

    const dispatch = useDispatch()
    const { status, error } = useSelector((state) => state.post)

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])


    return (
        <div className="posts">
            <h1 style={{textAlign:'center', margin: '20px 0'}}>Redux Toolkit Async Thunk</h1>
            {status === 'loading' && <h1 style={{textAlign:'center', color:'red'}}>Loding....</h1> }
            {status === 'rejected' && <h1 style={{textAlign:'center', color:'red'}}>{error}</h1>}
            <PostList />
        </div>
    )
}
export default Posts;
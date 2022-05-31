import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PostService from '../../API/PostService';


const initialState = {
    posts: [],
    status: null,
    error: null,
}

export const getPosts = createAsyncThunk('posts/getPosts',
        async (_,{ rejectWithValue }) => {
            try {
                const response = await PostService.getAll()
                const data = response.data
                return data
            } catch(error){
                return rejectWithValue(error.message)
            }
        }
)

export const deletePosts = createAsyncThunk('posts/deletePosts', 
        async (id, {rejectWithValue, dispatch}) => {
            try {
                await PostService.getById(id)
                dispatch(removePosts(id))
            } catch (e) {
                return rejectWithValue(e.message)
            }
        }
)


export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        removePosts: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload)
        },
        openPosts: (state, action) => {
            console.log(action.payload)
        },
    },
    extraReducers: {
        [getPosts.pending] : (state) => {
            state.status = 'loading'
            state.error = null
        },
        [getPosts.fulfilled] : (state, action)=> {
            state.status = 'resolved'
            state.posts = action.payload;
        },
        [getPosts.rejected] : (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [deletePosts.rejected] : (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    }
})

export const { removePosts , openPosts } = postsSlice.actions
export default postsSlice.reducer
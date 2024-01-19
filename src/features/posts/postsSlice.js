import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import axios from "axios";


const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";


const initialState = {
    posts:[],
    status:"idle", //"idle" |"loading" | "succeded" | "failed"
    error:null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () =>{
    try{
        const response= await axios.get(POSTS_URL)
        return response.data;

    }catch (err){
        return err.message;
    }
})

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) =>{
    try{
        const response= await axios.post(POSTS_URL, initialPost)
        return response.data;

    }catch (err){
        return err.message;
    }
})

const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        postAdded:{
            reducer(state, action){
            state.posts.push(action.payload) // in  react usually push will mutate the state if it gets done likes this but not in redux thanks to immer.js that in behing the reduxjs but it will only work in the createSlice.
            },
            prepare(title, content, userId){  // a prepare callback can generate a unique id , format data, return object with payload
                return{
                    payload:{
                        id:nanoid(),
                        title, 
                        content,
                        date:new Date().toISOString(),
                        userId,
                        reactions:{
                            thumbsUp:0,
                            wow:0,
                            heart:0,
                            rocket:0,
                            coffee:0
                         },
                    }
                }   

         }
    },
    reactionAdded(state, action){     // this will be aor new reducer
        const {postId, reaction} = action.payload
        const existingPost= state.posts.find(post => post.id === postId)
        if (existingPost){
            existingPost.reactions[reaction]++
        }
    }

},
extraReducers(builder){      //builder parameter is an object that let us defibe aditional case reducers that run in response to the  actions defined outside of the slice
    builder
        .addCase(fetchPosts.fulfilled, (state, action) => { //Adds a case reducer to handle a single exact action type.
            state.status  = 'succeeded'
            //Ading date and reactions
            let min = 1;
            const loadedPosts = action.payload.map(post =>{
                post.date = sub(new Date(), {minutes: min++}).toISOString();
                post.reactions= {
                    thumbsUp:0,
                    wow:0,
                    heart:0,
                    rocket:0,
                    coffee:0
                 }
                 return post;
            });
            //Add any fetched posts to the array
            state.posts = state.posts.concat(loadedPosts)
        })
        .addCase(fetchPosts.rejected, (state, action) =>{
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(addNewPost.fulfilled, (state, action) => {
            action.payload.userId = Number(action.payload.userId)
            action.payload.date = new Date().toISOString();
            action.payload.reactions = {
                thumbsUp:0,
                wow:0,
                heart:0,
                rocket:0,
                coffee:0
            }
            console.log(action.payload)
            state.posts.push(action.payload)
        })
}
});

export const selectAllPosts = (state) => state.posts.posts; // this is used so when the chape of the state ever changes it will only change in the slice and not in every component. 
export const getPostStatus = (state) => state.posts.status; 
export const getPostError = (state) => state.posts.error; 

export const {postAdded, reactionAdded} = postsSlice.actions // here is where we export all the actions. 

export default postsSlice.reducer
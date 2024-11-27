import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../types/types";


type PostsState = {
  allPosts: Post[];
};

const initialState: PostsState = {
  allPosts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<Post[]>) {
      state.allPosts = action.payload;
    },
    addPost(state, action: PayloadAction<Post>) {
      state.allPosts.push(action.payload);
    },
  },
});

export const { setPosts, addPost } = postsSlice.actions;
export default postsSlice.reducer;

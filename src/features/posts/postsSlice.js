import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await client.get('/fakeApi/posts')
  return response.data
})

// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount,action) => {
//     const response = await fetchCount(amount);
//     action.dispatch(incrementByAmount(response.data));
//     // return response.data;
//   }
// );

// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount,action) => {
//     const response = await fetchCount(amount);
//     action.dispatch(incrementByAmount(response.data));
//     // return response.data;
//   }
// );

const postsSlice = createSlice({
  name: 'postsName',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.find(post => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.posts = state.posts.concat(action.payload)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const { postAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;


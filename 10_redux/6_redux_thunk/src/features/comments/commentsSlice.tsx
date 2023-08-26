// Import createAsyncThunk and createSlice here.
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Create loadCommentsForArticleId here.
export const loadCommentsForArticleId = createAsyncThunk(
  "comments/loadCommentsForArticleId",
  async (id, ThunkAPI) => {
    const response = await fetch(`api/articles/${id}/comments`);
    const json = await response.json();
    return json;
  }
);
// Create postCommentForArticleId here.
export const postCommentForArticleId = createAsyncThunk(
  "comments/postCommentForArticleId",
  async ({articleId, comment}) => {
    const requestBody = JSON.stringify({
      comment: comment
      });
    const response = await fetch(`api/articles/${articleId}/comments`, {
      method: 'POST',
      body: requestBody,
    });
    const json = await response.json();
    return json;
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    // Add initial state properties here.
    byArticleId: {},
    isLoadingComments: false,
    failedToLoadComments: false,
    createCommentIsPending: false,
    failedToCreateComment: false,
  },
  // postCommentForArticleId
  // Add extraReducers here.
  extraReducers: (builder) => {
    builder      
      .addCase(loadCommentsForArticleId.pending, (state) => {
        state.failedToLoadComments = false;
        state.isLoadingComments = true;
      })
      .addCase(loadCommentsForArticleId.fulfilled, (state, action) => {
        state.isLoadingComments = false;
        state.failedToLoadComments = false;
        state.byArticleId[action.payload.articleId] = action.payload.comments;
      })
      .addCase(loadCommentsForArticleId.rejected, (state) => {
        state.failedToLoadComments = true;
        state.isLoadingComments = false;
        state.byArticleId = {};
      })
      .addCase(postCommentForArticleId.pending, (state) => {
        state.failedToCreateComment = false;
        state.createCommentIsPending = true;
      })
      .addCase(postCommentForArticleId.fulfilled, (state, action) => {
        state.failedToCreateComment = false;
        state.createCommentIsPending = false;
        state.byArticleId[action.payload.articleId].push(
          action.payload
        );
      })
      .addCase(postCommentForArticleId.rejected, (state) => {
        state.failedToCreateComment = true;
        state.createCommentIsPending = false;
      });
  },
});

export const selectComments = (state) => state.comments.byArticleId;
export const isLoadingComments = (state) => state.comments.isLoadingComments;
export const createCommentIsPending = (state) =>
  state.comments.createCommentIsPending;

export default commentsSlice.reducer;

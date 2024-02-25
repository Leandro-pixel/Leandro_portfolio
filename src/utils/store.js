import { configureStore } from "@reduxjs/toolkit";

import commentsReducer from './slices/commentSlice';


const store = configureStore({
  reducer: {
    comments: commentsReducer,
  },
  
  
});

export default store;
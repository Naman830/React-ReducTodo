import { configureStore } from '@reduxjs/toolkit'
import todoReducers from '../features/TodoSlice.js';


export const store = configureStore({
  reducer: {
    todos: todoReducers,
  }
})

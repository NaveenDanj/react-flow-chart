import { configureStore } from '@reduxjs/toolkit'
import nodesReducer from './NodeSlice/index'

export const store = configureStore({
  reducer: {
    Nodes : nodesReducer
  },
})
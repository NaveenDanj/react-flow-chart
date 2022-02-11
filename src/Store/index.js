import { configureStore } from '@reduxjs/toolkit'
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from 'redux-persist';
import nodesReducer from './NodeSlice/index'
import varsReducer from './ScriptVarObjectSlice/index'

export const store = configureStore({
  reducer: {
    Nodes : nodesReducer,
    Vars : varsReducer
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: {
    //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //     },
    // }),

  },
})
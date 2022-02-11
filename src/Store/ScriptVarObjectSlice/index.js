import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  vars: {},
}

export const nodesSlice = createSlice({
  name: 'Vars',
  initialState,
  reducers: {
    
    setVar : (state , action) => {
        state.vars[action.payload.key] = action.payload.value;
    },

    getVar : (state , action) => {
        return state.vars[action.payload.key];
    },

    resetVars : (state) => {
        state.vars = {};
    },

    deleteVar : (state , action) => {
        delete state.vars[action.payload.key];
    }
    

  },
})

// Action creators are generated for each case reducer function
export const { addNode , resetNodes , setNodes } = nodesSlice.actions
export default nodesSlice.reducer

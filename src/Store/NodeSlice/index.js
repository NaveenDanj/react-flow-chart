import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nodes: [],
}

export const nodesSlice = createSlice({
  name: 'Nodes',
  initialState,
  reducers: {
    
    addNode : (state , action) => {
      state.nodes.push(action.payload);
    },

    resetNodes : (state) => {
      state.nodes = [];
    },

    setNodes : (state , action) => {
      state.nodes = action.payload;
    }

  },
})

// Action creators are generated for each case reducer function
export const { addNode , resetNodes , setNodes } = nodesSlice.actions
export default nodesSlice.reducer

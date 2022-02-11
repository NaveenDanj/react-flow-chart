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
    }

  },
})

// Action creators are generated for each case reducer function
export const { addNode } = nodesSlice.actions
export default nodesSlice.reducer

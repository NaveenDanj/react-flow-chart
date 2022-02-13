import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  output: [],
}

export const OutputSlice = createSlice({
  name: 'Output',
  initialState,
  reducers: {
    
    resetOutput : (state) => {
      state.output = [];
    },

    addOutput : (state , action) => {
      state.output.push(action.payload);
    }

  },
})

// Action creators are generated for each case reducer function
export const { resetOutput , addOutput } = OutputSlice.actions
export default OutputSlice.reducer

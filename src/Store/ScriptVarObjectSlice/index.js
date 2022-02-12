import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  vars: {},
}

export const nodesSlice = createSlice({
  name: 'Vars',
  initialState,
  reducers: {
    
    setVar : (state , action) => {
      state.vars[action.payload.name] = {
        key : action.payload.key,
        name : action.payload.name,
        value : action.payload.value,
      }
    },

    getVar : (state , action) => {
      return state.vars[action.payload.name];
    },

    updateVar : (state , action) => {
      state.vars[action.payload.varName].value = action.payload.varValue;
    },

    resetVars : (state) => {
      state.vars = {};
    },

    deleteVar : (state , action) => {
      delete state.vars[action.payload.name];
    }


  },
})

// Action creators are generated for each case reducer function
export const { setVar , getVar , resetVars , deleteVar , updateVar } = nodesSlice.actions
export default nodesSlice.reducer

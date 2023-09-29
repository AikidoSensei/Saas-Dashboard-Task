import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  drag: false,
  mouseOut:false,
  showWidget:false,
  toggle:true
}

const UxSlice = createSlice({
  name: 'ux',
  initialState,
  reducers: {
   dragging:(state, {payload})=>{
    state.drag = payload;
   },
   mouseout:(state, {payload})=>{
    state.mouseOut = payload;
   },
   viewWidget:(state, {payload})=>{
    state.showWidget = payload;
   },
   close:(state, {payload})=>{
    state.drag = payload;
    state.mouseOut = payload;
    state.showWidget = payload;
   },
   toggleWidget:(state)=>{
    state.toggle = !state.toggle
   }
  },
})
export const { dragging, mouseout, viewWidget, close, toggleWidget } = UxSlice.actions

export default UxSlice.reducer

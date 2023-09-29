import { configureStore } from '@reduxjs/toolkit'
import UxReducer from './features/UXSlice'

export const store = configureStore({
  reducer: {
    ux: UxReducer,
  },
})

import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './Slices/counter'
import AuthReducer from './Slices/auth'


export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    
  },
})
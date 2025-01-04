import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counterSlice';
import { authReducer } from './authSlice';

const store = configureStore({
  reducer: {
    counterReducer: counterReducer,
    authReducer: authReducer,
  }
});

export default store;

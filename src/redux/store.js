import { configureStore } from '@reduxjs/toolkit';
import ticketReducer from './slices/ticketSlice';

export default configureStore({
  reducer: {
    ticket: ticketReducer,
  },
});

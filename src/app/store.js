import { configureStore } from '@reduxjs/toolkit'
import cardSlice from '../features/cardSlice'
import  patientsSlice  from '../features/patientsSlice'


export const store = configureStore({
  reducer: {
    card: cardSlice,
    patients: patientsSlice
  },
});

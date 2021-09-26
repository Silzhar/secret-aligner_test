import { createSlice } from '@reduxjs/toolkit';

export const cardSlice = createSlice({
  name: 'card',

  initialState: {
    createCard: [],
    createdPatients: [],
    
    task: {
      name: '',
      direcction: '',
      dentist: '',
      distributor: '',
      sex: ''
    },
    drawCreateCard: false,
  },

  reducers: {
    createPatients: (state, action) => {
      const { name, direcction, dentist, distributor, sex } = state.task;
      state.createdPatients.push(name, direcction, dentist, distributor, sex)

      // Reset states.
      state.task = {
        name: '',
        direcction: '',
        dentist: '',
        distributor: '',
        sex: ''
      }
      state.drawCreateCard = true
    },
    
    // I define the behaviour of each gearbox launched
    // by an action and configure the new status.
    changeFormValue: (state, action) => {
      const { payload } = action;
      const { name, value } = payload;

      state.task[name] = value;
    },
    deleteCard: (state, action) => {
      state.createdPatients.splice(action.payload)
    },
  },
})

// Actions.
export const {
  createPatients,
  deleteCard,
  changeFormValue,
} = cardSlice.actions

//Selectors.
export const selectCreateCard = (state) => state.card.createCard
export const selectcreatedPatients = (state) => state.card.createdPatients

export const selectName = (state) => state.card.task.name
export const selectDirecction = (state) => state.card.task.direcction
export const selectDentist = (state) => state.card.task.dentist
export const selectDistributor = (state) => state.card.task.distributor
export const selectSex = (state) => state.card.task.sex

export default cardSlice.reducer

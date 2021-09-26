import { createSlice } from '@reduxjs/toolkit'


export const patientsSlice = createSlice ({
    name: 'patients',

    initialState: {
        createCard: [],
        
    },

    reducers: {
        valuespatients: (state, action) => {
            const values = state.createCard
            state.createCard.push(values)
        }
    }
})

// Actions.
export const { valuespatients } = patientsSlice.actions

// Selectors.
export const selectCreateCard = (state) => state.patients.createCard

export default patientsSlice.reducer

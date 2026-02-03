import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    pastes:localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    :[]
}

export const pastSlice = createSlice ({
    name: "paste",
    initialState,
    reducers: {
        addToPastes: (state, actions) => {
        },
        updateToPastes: (state, actions) => {
        },
        resetAllPastes: (state, actions) => {
        },
        removeFromPastes: (state, actions) => {
        }
    }
})
export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes} = pastSlice.actions;
export default pastSlice.reducer;
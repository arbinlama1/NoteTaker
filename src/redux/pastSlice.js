import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: 0,
}

export const pastSlice = createSlice ({
    name: "myPast",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
})
export const { increment, decrement} = pastSlice.actions;
export default pastSlice.reducer;
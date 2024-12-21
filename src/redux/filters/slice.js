import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name: "filter",
    initialState: {name:""},
    reducers:{
        changeFilter: (state, action) => {
            state.name = action.payload
        }
    }
})

export const selectNameFilter = state => state.filter.name;
export const {changeFilter} = filterSlice.actions
export default filterSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
import {addContact, deleteContact, fetchContact} from "./operations"

const contactSlice = createSlice({
  name: "contacts",
  initialState : {
    status: "idle",
    items: [],
    error: null
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContact.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.items = action.payload
    }).addCase(addContact.fulfilled, (state, action) => {
      state.items = [...state.items , action.payload]
    }).addCase(deleteContact.fulfilled, (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    })
  }
});

export default contactSlice.reducer;

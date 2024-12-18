import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {url} from "../auth/operations";

export const fetchContact = createAsyncThunk(
  "contacts/fetchContact",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${url}/contacts`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContacts",
  async (newContacts, thunkAPI) => {
    try {
      const response = await axios.post(`${url}/contacts`, newContacts);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContacts",
  async (contactId, thunkAPI) => {
    try{
        await axios.delete(`${url}/contacts/${contactId}`);
        return contactId;
    }catch(e){
        return thunkAPI.rejectWithValue(e.message);
    }
  }
);

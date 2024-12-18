import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const url = "https://connections-api.goit.global/";

export const register = createAsyncThunk(
  "auth/register",
  async (userRegisterData, thunkAPI) => {
    try {
      const response = await axios.post(`${url}users/signup`, userRegisterData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userLoginData, thunkAPI) => {
    try {
      const response = await axios.post(`${url}users/login`, userLoginData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try{
        const response = await axios.post(`${url}users/logout`);
        return response.data;
    }catch(e){
        return thunkAPI.rejectWithValue(e.message)
    }
  }
);

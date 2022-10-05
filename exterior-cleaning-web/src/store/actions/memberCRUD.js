import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// takes an array as the first argument
export const getMemberData = createAsyncThunk(
  "getInfo/Member",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const user = state.signup.memberData.username;
    const response = await axios.get(`/members`, {
      Authorization: `Bearer ${data[1]}`,
      params: { username: user },
    });
  }
);

export const signUpMember = createAsyncThunk(
  "create/Member",
  async (data, thunkAPI) => {
    const response = await axios.post("/auth/signup", data);
    return response.data;
  }
);

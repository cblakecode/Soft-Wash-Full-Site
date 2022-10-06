import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// takes an array as the first argument
export const getMemberData = createAsyncThunk(
  "getInfo/Member",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const user =
      state.signup.memberData.username || state.login.loginFormData.email_user;
    const response = await axios.get(`/members`, {
      Authorization: `Bearer ${data}`,
      params: { username: user },
    });
    return response.data;
  }
);

export const signUpMember = createAsyncThunk(
  "create/Member",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/auth/signup", data);
      return response.data;
    } catch (err) {
      return err.data;
    }
  }
);

export const login = createAsyncThunk(
  "login/Member",
  async (data, thunkAPI) => {
    const response = await axios.post("/auth", data);
    const { accessToken } = response.data;
    thunkAPI.dispatch(getMemberData(accessToken));
    return response.data;
  }
);

export const updateMember = createAsyncThunk(
  "update/Member",
  async (data, thunkAPI) => {
    const response = await axios.patch("/members", data);
    thunkAPI.dispatch(getMemberData());
    return response.data;
  }
);

export const deleteMember = createAsyncThunk(
  "delete/Memeber",
  async (data, thunkAPI) => {
    const response = await axios.delete("/members", data.id);
    return response.data;
  }
);

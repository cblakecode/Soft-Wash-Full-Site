import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// takes an array as the first argument
export const getMemberData = createAsyncThunk(
  "getInfo/Member",
  async (data, { getState }) => {
    const user = getState().member.memberData.username;
    const response = await axios.get(`/members`, {
      headers: {
        Authorization: `Bearer ${data}`,
      },
      params: { username: user },
    });
    return response.data;
  }
);

export const signUpMember = createAsyncThunk(
  "create/Member",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post("/auth/signup", data);
      const { accessToken } = response.data;
      return dispatch(getMemberData(accessToken));
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  "login/Member",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post("/auth", data);
      const { accessToken } = response.data;
      return dispatch(getMemberData(accessToken));
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
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

export const logout = createAsyncThunk(
  "logout/Member",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/logout");
      return response.data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

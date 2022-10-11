import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "login/Member",
  async (data, thunkAPI) => {
    const response = await axios.post("/auth", data);
    const { accessToken } = response.data;
    return accessToken;
  }
);

// takes accesstoken as argument
export const getMemberData = createAsyncThunk(
  "getInfo/Member",
  async (data, { getState }) => {
    const {
      member: {
        memberData: { username },
      },
    } = getState();
    const response = await axios.get(`/members/${username}`, {
      headers: {
        Authorization: `Bearer ${data}`,
      },
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
      return err.message;
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

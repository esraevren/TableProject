import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import User from "../../models/userModel";


export const getUsers = createAsyncThunk(
    "users/getUsers",
    async (data, thunkApi) => {
      try {
        const response = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users?_limit=10"
        );
        return response.data;
      } catch (error: any) {
        const message = error.message;
        return thunkApi.rejectWithValue(message);
      }
    }
  );

  interface UserState {
    loading: boolean;
    error: string | null;
    data: User[] | null;
  }
  
  const initialState = {
    loading: false,
    error: null,
    data: null,
  } as UserState;

  const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(getUsers.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(getUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(getUsers.rejected, (state, action: PayloadAction<any>) => {
          state.error = action.payload;
        });
    },
  });

  export default userSlice.reducer;
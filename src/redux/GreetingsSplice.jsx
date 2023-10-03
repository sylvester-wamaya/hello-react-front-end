import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    randomGreeting: [],
    isLoading: false,
    errors: null
};

export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
  const response = await axios.get('http://127.0.0.1:3000/messages')
  console.log(response.data)
    return response.data
}
);

const greetingSlice = createSlice({
    name: 'greetings',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchGreeting.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchGreeting.fulfilled, (state, action) => {
                state.isLoading = false;
                state.randomGreeting = action.payload;
            })
            .addCase(fetchGreeting.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    }
});


export default greetingSlice.reducer;
   
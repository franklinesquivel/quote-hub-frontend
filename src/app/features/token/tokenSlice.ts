import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface TokenState {
    token: string;
}

// Define the initial state using that type
const initialState: TokenState = {
    token: ''
};

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        }
    }
});

export const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo }                   from '@/types';


interface AuthState {
    token: string | null;
    user: UserInfo | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    token: null,
    user: null,
    isAuthenticated: false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        setAuthUser: (state, action: PayloadAction<UserInfo>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        }
    }
});

export const { setToken, setAuthUser } = authSlice.actions;
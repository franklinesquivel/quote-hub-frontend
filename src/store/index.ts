import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore }    from 'redux-persist';
import storage                             from 'redux-persist/lib/storage';
import { quoteHubApi, quotesApi }          from '@/api';
import { authSlice }                       from '@/app';


const persistConfig = {
    key: 'auth',
    storage: storage,
    version: 1,
    whitelist: ['auth.token']
};

const reducers = combineReducers({
    [quotesApi.reducerPath]: quotesApi.reducer,
    [quoteHubApi.reducerPath]: quoteHubApi.reducer,
    auth: authSlice.reducer
});

const tokenPersisted = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: tokenPersisted,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(quotesApi.middleware).concat(quoteHubApi.middleware)
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

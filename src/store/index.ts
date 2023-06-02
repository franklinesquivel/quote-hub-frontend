import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore }    from 'redux-persist';
import storage                             from 'redux-persist/lib/storage';
import { quoteHubApi, quotesApi }          from '@/api';
import { tokenSlice }                      from '@/app';


const persistConfig = {
    key: 'token',
    storage: storage,
    version: 1,
    whitelist: ['token']
};

const reducers = combineReducers({
    [quotesApi.reducerPath]: quotesApi.reducer,
    [quoteHubApi.reducerPath]: quoteHubApi.reducer,
    token: tokenSlice.reducer
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

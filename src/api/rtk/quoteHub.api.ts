import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { QUOTE_HUB_API }             from '@/constants';
import { RootState }                 from '@/store';


export const quoteHubApi = createApi({
    reducerPath: 'quoteHubApi',
    baseQuery: fetchBaseQuery({
        baseUrl: QUOTE_HUB_API.URL,
        prepareHeaders: (headers, { getState }) => {
            const { auth: { token } } = getState() as RootState;
            headers.set('accept', 'application/json');
            if (token) {
                headers.set('Authorization', `Bearer ${ token }`);
            }
            return headers;
        }
    }),
    endpoints: () => ({})
});

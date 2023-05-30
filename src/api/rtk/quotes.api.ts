import { createApi, fetchBaseQuery }     from '@reduxjs/toolkit/query/react';
import { API_NINJAS_API, ENDPOINT_TAGS } from '@/constants';
import { ApiNinjasQuote }                from '@/types';


export const quotesApi = createApi({
    reducerPath: 'quotesApi',
    baseQuery:   fetchBaseQuery({
        baseUrl:        API_NINJAS_API.URL,
        prepareHeaders: headers => {
            headers.set('X-Api-Key', API_NINJAS_API.API_KEY);
            return headers;
        }
    }),
    tagTypes:    ENDPOINT_TAGS,
    endpoints:   build => ({
        getRandomQuote: build.query<ApiNinjasQuote, void>({
            query:             () => ({
                url: '/'
            }),
            transformResponse: ([quote]: ApiNinjasQuote[]) => quote
        })
    })
});

export const { useGetRandomQuoteQuery } = quotesApi;
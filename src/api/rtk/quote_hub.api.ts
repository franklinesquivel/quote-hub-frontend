import { createApi, fetchBaseQuery }        from '@reduxjs/toolkit/query/react';
import { QUOTE_HUB_API, QUOTE_HUB_TAGS }    from '@/constants';
import { AccessToken, UserInfo, UserLogin } from '@/types';


export const quoteHubApi = createApi({
    reducerPath: 'quoteHubApi',
    baseQuery: fetchBaseQuery({
        baseUrl: QUOTE_HUB_API.URL
    }),
    tagTypes: QUOTE_HUB_TAGS,
    endpoints: build => ({
        getCsrfToken: build.query<null, null>({
            query: () => ({
                method: 'GET',
                url: 'sanctum/csrf-cookie'
            })
        }),
        getAccessToken: build.query<string, UserLogin>({
            query: (user) => ({
                url: 'auth/get-token',
                method: 'POST',
                body: user,
                headers: {
                    'Accept': 'application/json'
                }
            }),
            transformResponse: (response: AccessToken) => response.token
        }),
        getAuthUserData: build.query<UserInfo, string>({
            query: (token) => ({
                url: 'auth/me',
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })

        })
    })
});

export const { useLazyGetAccessTokenQuery, useLazyGetCsrfTokenQuery, useLazyGetAuthUserDataQuery } = quoteHubApi;
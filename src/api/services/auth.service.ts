import { quoteHubApi }                         from '@/api';
import { QUOTE_HUB_AUTH_URIS }                 from '@/constants';
import { AccessToken, LoginPayload, UserInfo } from '@/types';


export const authApi = quoteHubApi.injectEndpoints({
    overrideExisting: true,
    endpoints: build => ({
        getCsrfToken: build.query<null, void>({
            query: () => ({
                method: 'GET',
                url: QUOTE_HUB_AUTH_URIS.GET_CSFR_TOKEN
            })
        }),
        getAccessToken: build.query<string, LoginPayload>({
            query: (user) => ({
                url: QUOTE_HUB_AUTH_URIS.GET_ACCESS_TOKEN,
                method: 'POST',
                body: user
            }),
            transformResponse: (response: AccessToken) => response.token
        }),
        getAuthUserData: build.query<UserInfo, void>({
            query: () => ({
                url: QUOTE_HUB_AUTH_URIS.GET_AUTH_USER_INFO,
                method: 'GET'
            })

        })
    })
});

export const { useGetCsrfTokenQuery, useLazyGetAccessTokenQuery, useLazyGetAuthUserDataQuery } = authApi;
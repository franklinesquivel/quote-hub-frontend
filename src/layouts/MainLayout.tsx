import { Layout, message }                                   from 'antd';
import { useCallback, useEffect }                            from 'react';
import { Outlet }                                            from 'react-router-dom';
import { useGetCsrfTokenQuery, useLazyGetAuthUserDataQuery } from '@/api';
import { setAuthUser }                                       from '@/app';
import { useAppDispatch, useAppSelector }                    from '@/hooks';
import { HeaderNav }                                         from './components';


export const MainLayout = () => {

    const { isLoading } = useGetCsrfTokenQuery();
    const [getAuthUser] = useLazyGetAuthUserDataQuery();
    const accessToken = useAppSelector(({ auth }) => auth.token);
    const dispatch = useAppDispatch();

    const [messageApi, contextHolder] = message.useMessage();

    const getUserInfo = useCallback(async () => {
        try {
            const authUser = await getAuthUser().unwrap();
            dispatch(setAuthUser(authUser));
        } catch ( err ) {
            messageApi.open({
                type: 'error',
                content: 'User can´t be found.'
            });
        }
    }, [dispatch, getAuthUser, messageApi]);

    useEffect(() => {
        if (accessToken) {
            getUserInfo();
        }
    }, [accessToken, getUserInfo]);

    return (
        <>
            { contextHolder }

            <Layout id='app-main-layout'>
                <HeaderNav />

                <Layout>
                    <Layout.Content id='app-content'>
                        { !isLoading ? <Outlet /> : <div>Loading...</div> }
                    </Layout.Content>
                </Layout>
            </Layout>
        </>
    );
};
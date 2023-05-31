import { Layout }    from 'antd';
import { Outlet }    from 'react-router-dom';
import { HeaderNav } from './components';


export const MainLayout = () => {
    return (
        <Layout id='app-main-layout'>
            <HeaderNav />

            <Layout>
                <Layout.Content id='app-content'>
                    <Outlet />
                </Layout.Content>
            </Layout>
        </Layout>
    );
};
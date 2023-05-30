import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';


export const Root = () => {
    return (
        <Layout id='app-main-layout'>
            <Layout>
                <Layout.Content id='app-content'>
                    <Outlet />
                </Layout.Content>
            </Layout>
        </Layout>
    );
};
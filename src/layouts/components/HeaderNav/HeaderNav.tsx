import { LoginOutlined }       from '@ant-design/icons';
import { Button, Layout, Row } from 'antd';
import './HeaderNav.css';


export const HeaderNav = () => (
    <Layout.Header id='app-header-nav'>
        <Row justify='space-between'>
            <h1 className='app-title'>
                QuoteHub
            </h1>

            <div>
                <Button
                    shape='round'
                    size='large'
                >
                    Log In
                    <LoginOutlined />
                </Button>
            </div>
        </Row>
    </Layout.Header>
);
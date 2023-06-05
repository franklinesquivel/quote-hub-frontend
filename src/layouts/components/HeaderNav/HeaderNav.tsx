import { Layout, Row }    from 'antd';
import { ClickPopup }     from '@/components';
import { useAppSelector } from '@/hooks';
import './HeaderNav.css';


export const HeaderNav = () => {

    const accessToken = useAppSelector(({ auth: { token } }) => token);

    return (
        <Layout.Header id='app-header-nav'>
            <Row
                justify='space-between'
            >
                <h1 className='app-title'>
                    QuoteHub
                </h1>

                {
                    !accessToken && (
                        <div>
                            <ClickPopup />
                        </div>
                    )
                }
            </Row>
        </Layout.Header>
    );
};
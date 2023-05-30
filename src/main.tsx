import { ConfigProvider } from 'antd';
import React              from 'react';
import ReactDOM           from 'react-dom/client';
import { App }            from '@/App.tsx';
import { mainTheme }      from '@/themes';
import './main.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ConfigProvider theme={ mainTheme }>
            <App/>
        </ConfigProvider>
    </React.StrictMode>
);

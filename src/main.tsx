import { ConfigProvider } from 'antd';
import React              from 'react';
import ReactDOM           from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router }         from '@/router';
import { mainTheme }      from '@/themes';
import './main.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ConfigProvider theme={ mainTheme }>
            <RouterProvider router={ router }/>
        </ConfigProvider>
    </React.StrictMode>
);

import { ConfigProvider } from 'antd';
import React              from 'react';
import ReactDOM           from 'react-dom/client';
import { Provider }       from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router }         from '@/router';
import { store }          from '@/store';
import { mainTheme }      from '@/themes';
import './main.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={ store }>
            <ConfigProvider theme={ mainTheme }>
                <RouterProvider router={ router } />
            </ConfigProvider>
        </Provider>
    </React.StrictMode>
);

import { ConfigProvider }   from 'antd';
import React                from 'react';
import ReactDOM             from 'react-dom/client';
import { Provider }         from 'react-redux';
import { RouterProvider }   from 'react-router-dom';
import { PersistGate }      from 'redux-persist/integration/react';
import { router }           from '@/router';
import { persistor, store } from '@/store';
import { mainTheme }        from '@/themes';
import './main.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={ store }>
            <PersistGate
                loading={ null }
                persistor={ persistor }
            >
                <ConfigProvider theme={ mainTheme }>
                    <RouterProvider router={ router } />
                </ConfigProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

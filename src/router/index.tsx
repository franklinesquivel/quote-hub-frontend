import { createBrowserRouter } from 'react-router-dom';
import { ROUTES }              from '@/constants';
import { Home }                from '@/pages';
import { Root }                from '@/Root.tsx';


export const router = createBrowserRouter([
    {
        path:     ROUTES.home,
        element:  <Root/>,
        children: [
            {
                index:   true,
                element: <Home/>
            }
        ]
    }
]);
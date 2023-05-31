import { createBrowserRouter } from 'react-router-dom';
import { ROUTES }              from '@/constants';
import { MainLayout }          from '@/layouts';
import { HomePage }            from '@/pages';


export const router = createBrowserRouter([
    {
        path: ROUTES.home,
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    }
]);
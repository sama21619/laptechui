import { useRoutes } from 'react-router-dom';
import { CommonLayout } from '../components/Layout';
import NotFound from '../pages/User/NotFound';
import { publishRoutes } from './PublishRoutes';
import { productDetailRoutes } from './ProductDetailRoutes';

export default function Routes() {
    const routes = [
        {
            path: '/',
            element: <CommonLayout />,
            children: [
                ...publishRoutes,
                ...productDetailRoutes,
                
                { path: '*', element: <NotFound title="Not found" /> },
            ],
        },
    ];
    return useRoutes(routes);
}

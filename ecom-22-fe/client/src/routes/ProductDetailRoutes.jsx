import { lazy, Suspense } from 'react';
const ProductDetail = lazy(() => import('../pages/User/ProductDetail'));
import Loading from '~/components/Loading';
const urls = [
    '/:id',
];

export const productDetailRoutes = urls.map((url) => ({
    path: url,
    element: (
        <Suspense fallback={<Loading />}>

            <ProductDetail />

        </Suspense>
    ),
}));

import { lazy, Suspense } from 'react';
import Loading from '~/components/Loading';
import OrderTable from '../pages/User/History/OrderTable';
import Profile from '../pages/User/History/Profile';
const Product = lazy(() => import('../pages/User/Product'));
const Home = lazy(() => import('../pages/User/Home'));
const Cart = lazy(() => import('../pages/User/Cart'));
const History = lazy(() => import('../pages/User/History'));
const Order = lazy(() => import('../pages/User/Order'));
const SearchPage = lazy(() => import('../pages/User/Search'));

export const publishRoutes = [
    {
        index: true,
        element: (
            <Suspense fallback={<Loading />}>
                <Home title="Laptech.com - Hàng chính hảng" />
            </Suspense>
        ),
    },
    {
        path: 'laptop',
        element: (
            <Suspense fallback={<Loading />}>
                <Product title="Sản phẩm - Laptech.com" />
            </Suspense>
        ),
    },





    {
        path: 'cart',
        element: (
            <Suspense fallback={<Loading />}>
                <Cart title="Giỏ hàng - Laptech.com" />
            </Suspense>
        ),
    },
    {
        path: 'order',
        element: (
            <Suspense fallback={<Loading />}>
                <Order title="Đơn hàng - Laptech.com" />
            </Suspense>
        ),
    },
    {
        path: 'search',
        element: (
            <Suspense fallback={<Loading />}>
                <SearchPage title="Tìm kiếm | Laptech.com" />
            </Suspense>
        ),
    },
    {
        path: 'history',
        element: (
            <Suspense fallback={<Loading />}>
                <History title="Lịch sử mua hàng | Laptech.com" />
            </Suspense>
        ),
    },

    {
        path: 'history/purchaseHistory',
        element: (
            <Suspense fallback={<Loading />}>
                <OrderTable title="Lịch sử mua hàng | Laptech.com" />
            </Suspense>
        ),
    },

    {
        path: '/history/profile',
        element: (
            <Suspense fallback={<Loading />}>
                <Profile title="Lịch sử mua hàng | Laptech.com" />
            </Suspense>
        ),
    },


];

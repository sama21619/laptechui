import { useEffect } from 'react';
import EmptyCart from './EmptyCart';
import CartInfo from './CartInfo';
import { useSelector } from 'react-redux';

function Cart({ title }) {
    useEffect(() => {
        document.title = title;
    }, []);

    const cartItems = useSelector((state) => state.cartItems.value);

    return cartItems.length ? (
        <div className="bg-gray-50">
            <CartInfo />
        </div>
    ) : (
        <EmptyCart />
    );
}

export default Cart;

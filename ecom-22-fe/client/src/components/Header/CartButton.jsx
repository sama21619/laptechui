import { Cart } from '../Icons';
import { useSelector } from 'react-redux';
import { useCart } from '~/hooks'

function CartButton(props) {
    const { totalQuantity } = useCart()
    return (
        <div className="relative">
            <div className="absolute  top-0 left-0 translate-x-4 -translate-y-1/2 bg-red-600 w-8 h-8 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">{totalQuantity}</span>
            </div>
            <i className="">
                <Cart />
            </i>
            <span className="ml-2">Giỏ hàng</span>
        </div>
    );
}

export default CartButton;

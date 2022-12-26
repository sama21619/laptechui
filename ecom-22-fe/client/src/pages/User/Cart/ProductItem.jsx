import { useState } from 'react';
import { Link } from 'react-router-dom';
import { XCircle } from 'react-bootstrap-icons';
import { numberWithCommas } from '~/utils';
import { useDispatch } from 'react-redux';
import { removeItem, updateItem } from '~/redux/shopping-cart/cartItemsSlide';
import { useSelector } from 'react-redux';
import { CounterQuantity } from '~/components/Selector';

function ProductItem(props) {
    const cartItems = useSelector((state) => state.cartItems.value);
    const dispatch = useDispatch();
    const removeCartItem = () => {
        cartItems.forEach((item) => {
            if (item.id === props.id ) {
                dispatch(removeItem(item));
            }
        });
    };
    const updateCartItem = (value) => {
        cartItems.forEach((item) => {
            if (item.id === props.id ) {
                dispatch(updateItem({ ...item, quantity: value }));
            }
        });
    };
    return (
        <div className="flex justify-between my-8 border-b pb-4">
            <div className="flex flex-col items-center justify-center w-28 gap-4">
                <img src={props.image} alt="" />
                <div className="text-lg text-gray-600">
                    <button onClick={() => removeCartItem()} className="text-gray-400">
                        <i>
                            <XCircle />
                        </i>
                        &nbsp;Xóa
                    </button>
                </div>
            </div>
            <div className="flex-grow">
                <div className="flex justify-between">
                    <Link to={`/${props.id}`} className="font-semibold">
                        {props.name}
                    </Link>
                    <div>
                        <p className="text-red-500">{numberWithCommas(props.price)}₫</p>
                        {/* <p className="line-through">{numberWithCommas(props.price)}₫</p> */}
                    </div>
                </div>
                <div className="flex justify-between">
                   
                    <CounterQuantity onChange={(value) => updateCartItem(value)} value={props.quantity} />
                </div>
            </div>
        </div>
    );
}

export default ProductItem;

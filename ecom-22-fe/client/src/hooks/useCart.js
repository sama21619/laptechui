
import { useSelector } from 'react-redux';
function useCart() {
    const cartItems = useSelector((state) => state.cartItems.value);
    console.log(cartItems)
    const totalPrice = cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0,
    );
    
    const totalQuantity = cartItems.reduce((total, item) => total + Number(item.quantity), 0);
   

    return { cartItems, totalPrice, totalQuantity };
}

export default useCart;

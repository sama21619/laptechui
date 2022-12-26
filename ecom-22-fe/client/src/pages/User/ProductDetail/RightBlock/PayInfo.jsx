import { useState } from 'react';
import { numberWithCommas } from '~/utils';
import { CounterQuantity} from '~/components/Selector';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '~/redux/shopping-cart/cartItemsSlide';
import { useNavigate } from 'react-router-dom';


function PayInfo(props) {
    const initProductDetail = useSelector((state) => state.products.productDetail.data);
    const initProductImage = useSelector((state) => state.products.productImage.data);
    const { id, price, name } = initProductDetail;
    const image = initProductImage[0]?.path;
    let navigate = useNavigate();
   





    const dispatch = useDispatch();

    const addToCart = (data) => {
        dispatch(addItem(data))
           
        
    };

    let productForCart = { id, price, name, image, quantity: 1 };
    const handleClickPay = () => {
        addToCart(productForCart);
        navigate('/cart')
    };

    return (
        <div className="mt-[40px]">
            
            <div className="border border-gray-200 text-2xl min-h-[300px] flex flex-col items-center justify-center">

                <ul className="p-4">
                    <div className="space-y-6">
                        <h1 className='text-3xl text-[#212529] font-medium my-12'>{name}</h1>
                        <span className='font-bold text-4xl text-[#CB1C22] my-12'>{numberWithCommas(price)}₫</span>

                        <p className='font-medium text-3xl mt-12'>Chọn số lượng:</p>
                        <div className='border w-[200px] flex justify-center'>
                        <CounterQuantity
                            value={1}
                            onChange={(quantity) => {
                                productForCart = { ...productForCart, quantity: quantity };
                            }}
                        />
                        </div>
                    </div>


                </ul>

            </div>
            <div>
                
               
                        <div className="w-full mt-12">
                            <button
                                className="bg-[#cb1c22] w-full mb-4 block p-6 rounded-lg text-white font-bold"
                                onClick={handleClickPay}
                            >
                                THÊM VÀO GIỎ HÀNG
                            </button>
                            
                        </div>
                    
            </div>
           
        </div>
    );
}

export default PayInfo;

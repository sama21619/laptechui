import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronDown, TicketPerforated } from 'react-bootstrap-icons';
import ProductItem from './ProductItem';
import Input from './Input';
import { numberWithCommas } from '~/utils';
import { LocationForm } from '~/components/LocationForm';
import { clearCart } from '~/redux/shopping-cart/cartItemsSlide';
import { postOrders } from '~/redux/order/ordersApi';
import moment from 'moment';
import './Cart.scss';
import { useCart } from '~/hooks';
import { useDispatch } from 'react-redux';
import { customerService } from '../../../services/customer.service';
import { orderService } from '../../../services/order.service';

function CartInfo() {
    const cartData = useCart();
    const [addressOption, setAddresOption] = useState();

    const { cartItems, totalPrice, totalQuantity } = cartData;
    console.log(totalQuantity)
    console.log(cartItems)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = document.getElementById('fullname').value;
        const phone = document.getElementById('phone').value;
        const homeAdd = document.getElementById('homeAddress').value;
        const sex = document.getElementsByName('sex');
        let sexValue;
        for (let i = 0, length = sex.length; i < length; i++) {
            if (sex[i].checked) {
                sexValue = sex[i].value;
            }
        }

        const res = await customerService.getCustomerByPhone(phone);
        const { id } = res;
        console.log(addressOption)
        const address = homeAdd + ',' + addressOption.ward + ',' + addressOption.district + ',' + addressOption.city;


        const invoiceId = Math.floor(Math.random() * 100000000).toString(4);
        const dataPostOrder = {
            id: invoiceId,
            userId: id,
            totalCost: totalPrice,
            finalTotalCost: totalPrice,
            isPaid: false,
            paymentType: " ",
            stockQuantity: totalQuantity,
            status: 'PENDING',
            address: address

        };

        cartItems?.map((item, index) => {

            const dataProduct = {
                invoiceId: invoiceId,
                productId: item.id,
                quantity: item.quantity,
                price: item.price,
                discountPrice: item.price
                
            }
            // console.log(dataProduct);
            orderService.postItem(dataProduct);

        })


        

      

        postOrders(dispatch, dataPostOrder);
        dispatch(clearCart());
        setTimeout(() => {
            navigate('/order');
            
        }, 2000);
       
    };

    return (
        <div className="w-3/4 m-auto border border-[#CB1C22] py-12 mt-4">
            <div className="flex justify-between py-4 px-4">
                <Link to="/" className="text-blue-500">
                    <i>
                        <ChevronLeft />
                    </i>
                    Mua thêm sản phẩm khác
                </Link>
                <p>Giỏ hàng của bạn</p>
            </div>

            <form className="bg-white rounded-xl px-14 py-8 shadow-sm" onSubmit={handleSubmit}>
                {cartItems.map((product, index) => (
                    <ProductItem key={index} {...product} />
                ))}
                <div className="flex justify-between py-4">
                    <span>Tạm tính ({totalQuantity} sản phẩm):</span>
                    <span> {numberWithCommas(totalPrice)}₫</span>
                </div>
                <div className="my-8 border-t py-4">
                    <h4 className='flex justify-center font-bold'>THÔNG TIN KHÁCH HÀNG</h4>
                    <div className="my-4">
                        <input id="male" type="radio" name="sex" value="Anh" defaultChecked />
                        &nbsp;
                        <label htmlFor="male">Anh</label>
                        &emsp;
                        <input id="female" type="radio" name="sex" value="Chị" />
                        &nbsp;
                        <label htmlFor="female">Chị</label>
                    </div>

                    <div className="flex gap-4">
                        <Input placeholder="Họ và Tên" id="fullname" required={true} />
                        <Input
                            placeholder="Số điện thoại"
                            id="phone"
                            type="tel"
                            required={true}
                            pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b"
                        />
                    </div>
                </div>
                <div className="my-8">

                    <div>
                        <div className="border border-blue-400 border p-4 rounded-xl">
                            <p>Chọn địa chỉ để biết thời gian nhận hàng và phí vận chuyển (nếu có)</p>

                            <Input placeholder="Số nhà, tên đường" id="homeAddress" required={true} />
                            <LocationForm
                                onChange={(e) => {
                                    setAddresOption(e);
                                }}
                            />
                            <div>



                                <p className="text-green-600 mt-6">Miễn phí giao hàng</p>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div>
                    <div className="py-8 border-b ">
                        <button className="p-4 border rounded-lg">
                            <i>
                                <TicketPerforated />
                            </i>
                            &nbsp;
                            <span>Sử dụng mã giảm giá</span>&nbsp;
                            <i>
                                <ChevronDown />
                            </i>
                        </button>
                        <div className="flex gap-8 border border-blue-400 border p-4 rounded-xl">
                            <Input placeholder="Nhập mã giảm giá/ Phiếu mua hàng" id="ticketid" />
                            <button className="py-4 px-10 border bg-[#CB1C22] rounded-lg text-white">Áp dụng</button>
                        </div>
                    </div>

                    <div className="flex justify-between my-4">
                        <strong>Tổng tiền:</strong>
                        <strong className="text-red-600">{numberWithCommas(totalPrice)}₫</strong>
                    </div>
                    <button type="submit" className="h-20 my-8 bg-[#CB1C22] rounded-lg w-full text-white font-bold">
                        ĐẶT HÀNG
                    </button>
                    
                </div>
            </form>
           
        </div>
    );
}

export default CartInfo;

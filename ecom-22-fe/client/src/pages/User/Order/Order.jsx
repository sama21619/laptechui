import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Order.scss';
import { useSelector } from 'react-redux';
import { numberWithCommas } from '~/utils';
import { Navigate} from 'react-router-dom';
import { customerService } from '../../../services/customer.service';
import { message } from 'antd';
import { orderService } from '../../../services/order.service';

const Order = ({ title }) => {

    const order = useSelector((state) => state.order?.order?.data);
    const [cus, setCus] = useState();

    const { userId } = order;

    useEffect(() => {
        const getCustomer = async () => {
            const customer = await customerService.getCustomerById(userId);
            setCus(customer)
        }
        getCustomer()
    }, []);










    console.log(order);
    const hasOrder = Object.keys(order).length > 0 && order.constructor === Object;

   

    



    const getPayment = () => {
        const radios = document.querySelectorAll('input[name="payment"]');
        let paymentIndex = -1;
        for (let i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                paymentIndex = i;
                break;
            }
        }
        return radios[paymentIndex].value;
    };


   


    
    const handleConfirm = async () => {

        const method = getPayment();
        console.log(method);

       

        const data = {
            paymentType: method,
            isPaid: true
        }

        await orderService.updateOrder(order.id, data);
        setTimeout(() => {

            message.success(
                {
                    content: "Thanh toán thành công",
                    className: "",
                    style: {
                        marginTop: "20vh"
                    }
    
                }

                
            )
            
        }, 1000);

       

        

    }




    const handleCancel = () => {
        localStorage.removeItem('order');
        alert('Hủy đơn hàng thành công !');
    };
    useEffect(() => {
        document.title = title;
    }, []);


    return (
        <>
            {hasOrder ? (
                <div className="order W-[3/4]">
                    <div className="alertsuccess-new">
                        <i className="new-cartnew-success"></i>
                        <strong>Đặt hàng thành công</strong>
                    </div>
                    <div className="ordercontent">
                        <div>
                            <p>
                                Cảm ơn  <b>{cus?.name}</b> đã cho Laptech cơ hội được
                                phục vụ.
                            </p>
                        </div>
                        <div>
                            <div className="info-order">
                                <div className="info-order-header">
                                    <h4>
                                        Đơn hàng: <span className='font-bold'>#{order.id}</span>
                                    </h4>
                                    <div className="header-right">
                                        <Link to="/history">Quản lý đơn hàng</Link>
                                        <div className="cancel-order-new">
                                            <div>
                                                <div className="cancel-order-new">
                                                    <span>.</span>
                                                    <a onClick={handleCancel} href="/">
                                                        Hủy
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <label htmlFor="">
                                    <span>
                                        <i className="info-order__dot-icon"></i>
                                        <span>
                                            <strong>Người nhận hàng:</strong>
                                            <h4 id="userName">{cus?.name}</h4>
                                            <br />
                                            <strong>Số điện thoại:</strong>
                                            <h4 id="customerPhone">{cus?.phone}</h4>
                                        </span>
                                    </span>
                                </label>
                                <label htmlFor="">
                                    <span>
                                        <i className="info-order__dot-icon"></i>
                                        <span>
                                            <strong>Giao đến: </strong>
                                            {order.address}

                                        </span>
                                    </span>
                                </label>
                                <label htmlFor="">
                                    <span>
                                        <i className="info-order__dot-icon"></i>
                                        <span>
                                            <strong>Tổng tiền: {numberWithCommas(Number(order.finalTotalCost))}đ </strong>
                                        </span>
                                    </span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <h4 className="order-infor-alert">Đơn hàng chưa được thanh toán</h4>
                        </div>

                        <div className="payment-method-new">
                            <div>
                                <h3>Chọn hình thức thanh toán:</h3>
                                <ul className="formality-pay-new FLEX">
                                    <li className="normal-payment">
                                        <div className="text-payment">
                                            <span>
                                                <input type="radio" id="vnpay" name="payment" value="vnpay" />
                                                <label htmlFor="vnpay">Thanh toán qua Ví PayPal</label>
                                            </span>
                                        </div>
                                    </li>
                                    <li className="normal-payment">
                                        <div className="text-payment">
                                            <span>
                                                <input type="radio" id="momo" name="payment" value="momo" />
                                                <label htmlFor="momo">Ví MoMo</label>
                                            </span>
                                        </div>
                                    </li>

                                    <li className="normal-payment">
                                        <div className="text-payment">
                                            <span>
                                                <input type="radio" id="cash" name="payment" value="cash" />
                                                <label htmlFor="cash">Thanh toán khi nhận hàng </label>
                                            </span>
                                        </div>
                                    </li>
                                </ul>

                                <button onClick={handleConfirm} className="confirm-payment-button">
                                    Xác nhận
                                </button>
                            </div>

                            <hr />

                            <div className="buyanotherNew">
                                <Link to="/"> Mua thêm sản phẩm khác </Link>
                            </div>

                        </div>
                    </div>
                </div>



            ) : (
                <Navigate to="/cart" />
            )}
        </>
    );
};

export default Order;

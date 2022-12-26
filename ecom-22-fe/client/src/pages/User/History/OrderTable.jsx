import { Fragment, useEffect } from 'react';
import { numberWithCommas } from '~/utils';
import { Table } from 'flowbite-react';
import './table.scss';
import { historyService } from '~/services';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { message } from 'antd';
import clsx from 'clsx';
const EmptyOrder = () => {
    return (
        <div className="flex flex-col items-center justify-center my-8">


            <p>Bạn chưa có đơn hàng nào</p>
            <Link className="" to="/">
                Về trang chủ
            </Link>

        </div>
    );
};




const OrderTable = () => {

    const user = JSON.parse(localStorage.getItem('customerInfo'));
    const [his, setHis] = useState([]);
    const [orderDetail, setOrderDetail] = useState({ index: -1, id: null });
    const [detail, setDetail] = useState([]);


    const fetchHis = () => {
        historyService.getHistoryOrderByUserId(user.id).then((res) => {
            setHis(res);
        })
    }


    const handleCancel = (e) => {
       

        if (confirm('Bạn có muốn hủy đơn hàng không?')) {
            const id = e.target.id;
            const data = JSON.stringify({ status: 'CANCELED' });
            console.log(data)
            historyService.updateHistoryOrder(id, data).then((res) => {
                console.log(res);
            
                message.success(
                    {
                        content: "Hủy đơn hàng thành công",
                        className: "",
                        style: {
                            marginTop: "20vh"
                        }
        
                    }
                )
                setTimeout(() => {
                    window.location.reload()
        
                }, 1000)
              
            })


        }
    }

    const fetchDetaiProduct = (id) => {

        historyService.getDetailItem(id).then((res) => {
            setDetail(res);
            console.log(detail);
        })
    }


    useEffect(() => {
        fetchHis()
    }, [])


    return his.length > 0 ? (
        <Table hoverable={true} className="my-3">
            <Table.Head className="">
                <Table.HeadCell> Mã đơn hàng </Table.HeadCell>
                <Table.HeadCell>Sản phẩm</Table.HeadCell>
                <Table.HeadCell>Số lượng</Table.HeadCell>
                <Table.HeadCell>Giá</Table.HeadCell>
                <Table.HeadCell>Địa chỉ</Table.HeadCell>
                <Table.HeadCell>Ngày đặt mua</Table.HeadCell>
                <Table.HeadCell>Trạng thái</Table.HeadCell>
                <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="">
                {his?.map((order, index) => {

                    const displayDetail = index === orderDetail.index;
                    return (
                        <Fragment key={index}>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 overflow-hidden">
                                <Table.Cell className="text-blue-400 text-[14px]">#{order.id}</Table.Cell>
                                <Table.Cell className="text-blue-400 text-[14px]  hover:text-blue-700 select-none">
                                    <button
                                        onClick={() => {
                                            fetchDetaiProduct(order.id)
                                            setOrderDetail((current) => {
                                                return current.index === index
                                                    ? { index: -1, id: order.id }
                                                    : { index, id: order.id };
                                            })
                                        }}
                                    >
                                        Xem chi tiết


                                    </button>


                                </Table.Cell>

                                <Table.Cell>{order.stockQuantity}</Table.Cell>
                                <Table.Cell className="text-red-400">{numberWithCommas(order.totalCost)}₫</Table.Cell>
                                <Table.Cell className='text-[14px]'>{order.address}</Table.Cell>
                                <Table.Cell>
                                    <p className='text-[13px]'>{order.createdDate}</p>
                                </Table.Cell>
                                <Table.Cell className="">
                                    <span className={clsx('mr-4 text-[14px]', order.status == 'PREPARED' && 'text-[#cb1c22]')}>{order.status}</span>
                                    <button className={clsx(
                                            'bg-[#cb1c22] text-2xl font-medium p-4 rounded-lg  text-white',
                                            order.status != 'PENDING' && '!bg-gray-100 !text-gray-700',
                                        )}
                                        onClick={handleCancel}
                                        id={order.id}
                                        disabled ={ order.status != 'PENDING'}
                                       


                                    >
                                        Hủy
                                    </button>
                                </Table.Cell>


                            </Table.Row>

                            {displayDetail && (
                                <Table.Row>
                                    <Table.Cell className="">
                                        {detail.map((item, index) => {
                                            return (


                                                <div className="flex justify-between py-4 border-b" key={index}>
                                                    <div className="flex">

                                                        <div>
                                                            <Link to={`/${item.productId}`} >
                                                                <p className="font-semibold text-3xl hover:text-[#CB1C22]">{item.productId}</p>
                                                            </Link>

                                                            <p>Số lượng: {item.itemQuantity}</p>
                                                        </div>

                                                        <div>

                                                            <p className="text-[#CB1C22] mx-12">{numberWithCommas(item.itemPrice)}₫</p>
                                                        </div>
                                                    </div>


                                                </div>

                                            )
                                        })}
                                    </Table.Cell>
                                </Table.Row>
                            )}

                        </Fragment>
                    );
                })}
            </Table.Body>
        </Table>
    ) : <EmptyOrder />
};

export default OrderTable;

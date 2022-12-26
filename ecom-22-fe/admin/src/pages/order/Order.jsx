import { Fragment, useEffect } from 'react';
import { numberWithCommas } from '~/utils';
import { Table } from 'flowbite-react';
import './order.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { orderService } from '../../services/order.service';
import { message } from 'antd';
import clsx from 'clsx'





const Order = () => {
	document.title = "Quản lý đơn hàng";



	const [orderDetail, setOrderDetail] = useState({ index: -1, id: null });
	const [detail, setDetail] = useState([]);
	const [order, setOrder] = useState([]);


	const fetchOrder = () => {
		orderService.getAllOrder().then((res) => {
			setOrder(res.data);
		})
	}


	const handleConfirm = (e) => {
		if (confirm('Bạn có muốn xác nhận đơn hàng không?')) {
			const id = e.target.id;
			const data = JSON.stringify({ status: 'PREPARED' });
			orderService.updateOrder(id, data).then((res) => {
				console.log(res);
				message.success(
					{
						content: "Xác nhận thành công",
						className: "",
						style: {
							marginTop: "20vh"
						}

					})

				setTimeout(() => {
					window.location.reload();
				}, 1000);
			})


		}
	}

	const fetchDetaiProduct = (id) => {

		orderService.getDetailItem(id).then((res) => {
			setDetail(res.data);
			console.log(detail);
		})
	}


	useEffect(() => {
		fetchOrder()
	}, [])

	return (
		<div className='w-[full]'>


			<Table

				hoverable={true} className="my-3 overflow-x-scroll w-full">

				<Table.Head className="overflow-scroll">
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
				<Table.Body className="divide-y overflow-scroll ">
					{order?.map((order, index) => {

						const displayDetail = index === orderDetail.index;
						return (
							<Fragment key={index}>
								<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 overflow-scroll">
									<Table.Cell className="text-blue-400 text-[14px] overflow-scroll">#{order.id}</Table.Cell>
									<Table.Cell className="text-blue-400 text-[14px]  hover:text-blue-700 select-none overflow-scroll ">
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
									<Table.Cell className="text-red-400 overflow-scroll">{numberWithCommas(order.totalCost)}₫</Table.Cell>
									<Table.Cell className='text-[14px]'>{order.address}</Table.Cell>
									<Table.Cell className='overflow-scroll'>
										<p className='text-[13px] '>{order.createdDate}</p>
									</Table.Cell>
									<Table.Cell>
										<span className={clsx('mr-4 text-[14px]', order.status == 'PREPARED' && 'text-[#cb1c22]')}>{order.status}</span>
										<button className={clsx(
                                            'bg-[#cb1c22] text-sm font-medium p-4 rounded-lg  text-white',
                                            order.status != 'PENDING' && '!bg-gray-100 !text-gray-700',
                                        )}
											onClick={handleConfirm}
											id={order.id}
											disabled={order.status != 'PENDING'}


										>
											Xác nhận
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
																<Link to={`/products/${item.productId}`} >
																	<p className="font-semibold text-xl hover:text-[#CB1C22]">{item.productId}</p>
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
		</div>
	)
};

export default Order;

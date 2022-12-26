
import "./home.scss";
import Widget from "../../components/widget/Widget";
import { useEffect, useState } from "react";
import { ProductService } from "~/services";
import { orderService } from '../../services/order.service';
import { UserService } from "~/services/user.service";


const Home = () => {
	document.title = "Trang chủ";



	const [amountCustomer, setAmountCustomer] = useState(1);
	const [amountOrder, setAmountOrder] = useState(1);
	const [amountRevenue, setAmountRevenue] = useState(0);
	const [amountProduct, setAmountProduct] = useState(1);
	const [amountProfit, setAmountProfit] = useState(1);
	const [dataSixMoth, setDataSixMoth] = useState(1);
	const [orders, setOrders] = useState([]);


	useEffect(() => {
		function getProducts() {
			ProductService.getProducts().then((res) => setAmountProduct(res.data.length));
		}
		getProducts();
	}, []);

	useEffect(() => {

		function fetchOrder() {
			orderService.getAllOrder().then((res) => {
				setAmountOrder(res.data.length);
			
			});
		}
		fetchOrder();
	}, []);


	useEffect(() => {

		function getOrders() {
			orderService.getAllOrder().then((res) => {
				
				setOrders(res.data);
				
				
			});
		}
		getOrders();
	}, []);

	
	useEffect(() => {
		async function getUsers() {
			const res = await UserService.getUsers().then((res) => setAmountCustomer(res.data.length));
		}
		getUsers();
	}, []);

	console.log(orders)

	var sum = 0;
	orders.map((order, index) => {
		if(order.paid == true){

			sum = sum + order.finalTotalCost;
		}
		
	})


	

	






	return (
		<div>


			<div className="widgets">
				<Widget title={"KHÁCH HÀNG"} type="user" amount={amountCustomer} />
				<Widget title={"ĐƠN HÀNG"} type="order" amount={amountOrder} />
				<Widget title={"DOANH THU"} type="earning" amount={sum} />
				<Widget title={"SẢN PHẨM"} type="product" amount={amountProduct} />
			</div>

			<div className="flex justify-center" >
				<img className="w-[1300px] h-[500px] " src="https://themefisher.com/blog/e-commerce-website-admin-panel-templates.png" alt="" />
			</div>
		

		</div>
	);
};

export default Home;

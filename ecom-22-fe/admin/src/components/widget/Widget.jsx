import { Link } from "react-router-dom";
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PaidIcon from "@mui/icons-material/Paid";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ title, type, amount = 100 }) => {
	let data;

	//temporary
	switch (type) {
		case "user":
			data = {
				title: "KHÁCH HÀNG",
				isMoney: false,
				link: "Xem tất cả",
				icon: (
					<PersonOutlinedIcon
						className="icon"
						style={{
							fontSize: 40,
							color: "crimson",
							backgroundColor: "rgba(255, 0, 0, 0.2)",
						}}
					/>
				),
			};
			break;
		case "order":
			data = {
				title: "ĐƠN HÀNG",
				isMoney: false,
				link: "Xem tất cả đơn hàng",
				icon: (
					<ShoppingCartOutlinedIcon
						className="icon"
						style={{
							fontSize: 40,
							backgroundColor: "rgba(218, 165, 32, 0.2)",
							color: "goldenrod",
						}}
					/>
				),
			};
			break;
		case "earning":
			data = {
				title: "DOANH THU",
				isMoney: true,
				link: "Xem thống kê",
				icon: (
					<MonetizationOnOutlinedIcon
						className="icon"
						style={{
							fontSize: 40,
							backgroundColor: "rgba(0, 128, 0, 0.2)",
							color: "green",
						}}
					/>
				),
			};
			break;
		case "product":
			data = {
				title: "SẢN PHẨM",
				link: "Xem tất cả sản phẩm",
				icon: (
					<AccountBalanceWalletOutlinedIcon
						className="icon"
						style={{
							fontSize: 40,
							backgroundColor: "rgba(128, 0, 128, 0.2)",
							color: "purple",
						}}
					/>
				),
			};
			break;
		default:
			break;
	}

	//format number
	Number.prototype.format = function (n, x, s, c) {
		var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\D" : "$") + ")",
			num = this.toFixed(Math.max(0, ~~n));
		return (c ? num.replace(".", c) : num).replace(new RegExp(re, "g"), "$&" + (s || ","));
	};


	return (
		<div className="widget bg-white hover:drop-shadow-md">
			<div className="left">
				<span className="title">{title}</span>
				<span className="counter">
					{amount.format(0, 3, ".", ",")} {data?.isMoney && "VNĐ"}
				</span>
				<Link to={type === "earning" ? `${"/orders"}` : `/${type}s`}>
					<span className="link">{data?.link}</span>
				</Link>
			</div>
			<div className="right">

				{data?.icon}
			</div>
		</div>
	);
};

export default Widget;

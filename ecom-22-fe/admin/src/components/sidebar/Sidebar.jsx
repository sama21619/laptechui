import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
	let navigate = useNavigate();


	return (
		<div className="sidebar">
			<div className="top">
				<Link to="/" style={{ textDecoration: "none" }}>

					<span className="logo">Dashboard</span>

				</Link>
			</div>
			<hr />
			<div className="center">
				<ul>

					<div>
						<p className="title">TRANG CHÍNH</p>
						<Link to="/" style={{ textDecoration: "none" }}>
							<li>
								<DashboardIcon className="icon" />
								<span>Trang chủ</span>
							</li>
						</Link>
						<p className="title">QUẢN LÝ</p>
						<Link to="/users" style={{ textDecoration: "none" }}>
							<li>
								<PersonOutlineIcon className="icon" />
								<span>Khách hàng</span>
							</li>
						</Link>
						<Link to="/products" style={{ textDecoration: "none" }}>
							<li>
								<StoreIcon className="icon" />
								<span>Sản phẩm</span>
							</li>
						</Link>

						<Link to="/reviews" style={{ textDecoration: "none" }}>
							<li>
								<ThumbUpIcon className="icon" />
								<span>Đánh giá</span>
							</li>
						</Link>
						<Link to="/comments" style={{ textDecoration: "none" }}>
							<li>
								<ChatIcon className="icon" />
								<span>Bình luận</span>
							</li>
						</Link>
					</div>

					<Link to="/orders" style={{ textDecoration: "none" }}>
						<li>
							<CreditCardIcon className="icon" />
							<span>Đơn hàng</span>
						</li>
					</Link>

					


					<p className="title">NGƯỜI DÙNG</p>

					

					<li
						onClick={() => {
							if (window.confirm("Bạn có muốn thoát không?") === true) {
								localStorage.removeItem("userInfo");
								navigate('/login')
							}
							
						}}
					>
						<ExitToAppIcon className="icon" />
						<span>Đăng xuất</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;

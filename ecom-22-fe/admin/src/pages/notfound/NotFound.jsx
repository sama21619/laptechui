import { Link } from "react-router-dom";
import "./notfound.scss";
const NotFound = () => {
	document.title = "Không tìm thấy trang";
	return (
		<div class="container">
			
			<img className="w-[1000px]" src="https://mauwebsite.vn/wp-content/uploads/2021/10/loi-404.png" alt="" />
			<Link to="/">Go back</Link>
		</div>
	);
};

export default NotFound;

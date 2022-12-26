import Home from "../pages/home/Home";
import Order from "../pages/order/Order";
import Login from "../pages/login/Login";
import ListProduct from "../pages/list/ListProduct";
import Comment from "../pages/comment/Comment";
import NotFound from "../pages/notfound/NotFound";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./protected.route";
import ListUser from "../pages/list/ListUser";
import ReviewsList from "../pages/review/ReviewsList";
import Layout from "~/components/layout";
import NewLaptop from "../pages/new/newLaptop/NewLaptop";
import EditProduct from "../pages/new/newLaptop/EditProduct";
export const AdminRoutes = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<ProtectedRoute>
						<Layout />
					</ProtectedRoute>
				}
			>
				<Route index element={<Home />} />
				<Route path="orders" element={<Order title="Đơn hàng - thegioididong" />} />
				<Route path="users">
					<Route index element={<ListUser />} />
				
					
				</Route>
				<Route path="products">
					<Route index element={<ListProduct />} />
					<Route
						path=":productId"
						element={<EditProduct title="Add New Product" />}
					/>
					<Route path="new" element={<NewLaptop  title="Add New Product" />} />
				</Route>
			
				<Route path="reviews">
					<Route index element={<ReviewsList />} />
				</Route>
				<Route path="comments">
					<Route index element={<Comment />} />
					
				</Route>
				<Route path="*" element={<NotFound />} />
			</Route>
			<Route path="/login" element={<Login />} />
		</Routes>
	);
};

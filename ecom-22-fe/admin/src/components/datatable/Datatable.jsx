import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { CommentService } from "../../services/comment.service";
import { message } from 'antd';
import { useParams } from "react-router-dom";
import { ProductService } from "~/services";
import { UserService } from "../../services/user.service";
import { ReviewService } from "../../services/review.service";



const Datatable = ({ rows, title, productColumns, type = "", reply = false }) => {
	
	console.log("rows", rows);

	const handleDelete = (id) => {

		if (type === "comment") {

			if (confirm("Bạn có chắc muốn xóa bình luận này không") == true) {
				CommentService.removeComment(id);

				message.success(
					{
						content: "Xóa bình luận thành công",
						className: "",
						style: {
							marginTop: "20vh"
						}

					})

				setTimeout(() => {
					window.location.reload();
				}, 1000);
			} else {

			}

		}


		if (type === "review") {

			if (confirm("Bạn có chắc muốn xóa đánh giá này không") == true) {
				ReviewService.deleteReview(id);
				

				message.success(
					{
						content: "Xóa đánh giá thành công",
						className: "",
						style: {
							marginTop: "20vh"
						}

					})

				setTimeout(() => {
					window.location.reload();
				}, 1000);
			} else {

			}



			
		}
		if (type === "users") {

			if (confirm("Bạn có chắc muốn xóa tài khoản này không") == true) {
				UserService.removeUser(id);

				message.success(
					{
						content: "Xóa tài khoản thành công",
						className: "",
						style: {
							marginTop: "20vh"
						}

					})

				setTimeout(() => {
					window.location.reload();
				}, 1000);
			} else {
			}
		}
		if (type === 'products') {

			if (confirm("Bạn có chắc muốn xóa sản phẩm này không") == true) {
				ProductService.deleteProductById(id);

				message.success(
					{
						content: "Xóa sản phẩm thành công",
						className: "",
						style: {
							marginTop: "20vh"
						}

					})

				setTimeout(() => {
					window.location.reload();
				}, 1000);
			} else {
			}
		}


	};



	//Action

	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="cellAction">




						{type === "products" && (
							<Link to={`/products/${params.row.id}`} style={{ textDecoration: "none" }}>
								<div className="viewButton">Chi tiết</div>
							</Link>
						)}

						<div
							className="deleteButton"
							onClick={() => {

								handleDelete(params.row.id);

							}}
						>
							Delete
						</div>
					</div>
				);
			},
		},
	];
	return (
		<div className="datatable">
			<div className="datatableTitle">
				Quản lý {title}
				<Link to={"/" + type + "/new"} className="link px-3">
					Thêm mới
				</Link> 

				
			</div>

			<DataGrid
				className="datagrid"
				rows={rows}
				columns={productColumns?.concat(actionColumn)}
				pageSize={9}
				rowsPerPageOptions={[9]}

			/>

		</div>
	);
};

export default Datatable;

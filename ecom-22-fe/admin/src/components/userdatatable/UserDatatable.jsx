import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserDatatable = ({ rows, title, userColumns }) => {
	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="cellAction">
						<Link to={`/users/${params.row.id}`} style={{ textDecoration: "none" }}>
							<div className="viewButton">View</div>
						</Link>
						<div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
							Delete
						</div>
					</div>
				);
			},
		},
	];
	return (
		<div className="datatable">
			<div className="datatableTitle">Quản lý {title}</div>
			<DataGrid
				className="datagrid"
				rows={rows}
				columns={userColumns.concat(actionColumn)}
				pageSize={9}
				rowsPerPageOptions={[9]}
				checkboxSelection
			/>
		</div>
	);
};

export default UserDatatable;

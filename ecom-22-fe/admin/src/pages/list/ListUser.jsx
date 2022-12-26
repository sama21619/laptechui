import "./list.scss";
import { useState, useEffect } from "react";
import Datatable from "~/components/datatable/Datatable";
import { UserService } from "~/services/user.service";
import { userColumns } from "~/ColumnsOfTable";

const ListUser = () => {
	document.title = "Khách hàng";
	
	const [data, setData] = useState([]);

	useEffect(() => {
		async function getUsers() {
			const res = await UserService.getUsers().then((res) => setData(res.data));
		}
		getUsers();
	}, []);

	return (
		<div className="list">
			<div className="listContainer">
				<Datatable rows={data} title="người dùng" productColumns={userColumns} type="users" />
			</div>
		</div>
	);
};

export default ListUser;

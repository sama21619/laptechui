import { useState, useEffect } from "react";
import Datatable from "~/components/datatable/Datatable";
import { CommentService } from "../../services/comment.service";
import { commentColumns } from "~/ColumnsOfTable";

const Comment = () => {
	document.title = "Bình luận sản phẩm";
	const [data, setData] = useState([]);
	useEffect(() => {
		function getComments() {
			CommentService.getComments().then((res) => setData(res.data));
		}
		getComments();
	}, []);

	
	return (
		<div>
			<div>
				<Datatable rows={data} title="bình luận" productColumns={commentColumns} type="comment" />
			</div>
		</div>
	);
};

export default Comment;

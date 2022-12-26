import "../new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductService } from "~/services";
import { baseURL_ } from "../../../api/axios.config";
import { productInputs } from "../../../InputOfForm";
import { message } from 'antd';


const EditProduct = ({  title }) => {
	document.title = "Sửa sản phẩm";
	const param = useParams();
	const navigate = useNavigate();
	// const [arrFile, setArrFile] = useState([]);
	// const [isLoading, setLoad] = useState(true);
	// const [fileInput, setFileInput] = useState([]);
	// const fileRef = useRef();
	// const [file, setFile] = useState(null);

	const [data, setData] = useState({});
	const [images, setImages] = useState([]);


	useEffect(() => {
		ProductService.getProductImageById(param.productId).then((res) => {
			setImages(res.data);
			



		})
	}, [param.productId]
	)

	useEffect(() => {



		ProductService.getProductById(param.productId).then((res) => {
			setData(res.data);

			console.log(res.data);
			document.getElementById("name").value = res.data.name;
			document.getElementById("id").value = res.data.id;
			document.getElementById("listedPrice").value = res.data.listedPrice;
			document.getElementById("price").value = res.data.price;
			document.getElementById("quantity").value = res.data.quantityInStock;
			document.getElementById("ram").value = res.data.ramCapacity;
			document.getElementById("cpuType").value = res.data.cpuType;
			document.getElementById("cpuBrand").value = res.data.cpuBrand;
			document.getElementById("os").value = res.data.cpuMoreInformationHTML;
			document.getElementById("screen").value = res.data.screenId;
			document.getElementById("brand").value = res.data.brandId;
			document.getElementById("description").value = res.data.moreDescriptionHTML;
			document.getElementById("releaseDate").value = res.data.releasedDate;


		});

	}, [param.productId]);

	const handleSubmit = (e) => {

		e.preventDefault();

		const name = document.getElementById("name").value;
		const id = document.getElementById("id").value;
		const listedPrice = Number(document.getElementById("listedPrice").value);
		const price = Number(document.getElementById("price").value);
		const quantityInStock = Number(document.getElementById("quantity").value);
		const ramCapacity = document.getElementById("ram").value;
		const cpuType = document.getElementById("cpuType").value;
		const cpuBrand = document.getElementById("cpuBrand").value;
		const cpuMoreInformationHTML = document.getElementById("os").value;
		const screenId = Number(document.getElementById("screen").value);
		const brandId = Number(document.getElementById("brand").value);
		const moreDescriptionHTML = document.getElementById("description").value;
		const categoryId = 2;
		const releasedDate = document.getElementById("releaseDate").value;

		const data = {
			id, name, listedPrice, price, quantityInStock, ramCapacity, cpuMoreInformationHTML
			, screenId, brandId, moreDescriptionHTML, categoryId, cpuBrand, cpuType, releasedDate
		}

		

		console.log(data);

		ProductService.updateProductById(id, data).then((res) => {
			console.log(res)
			message.success(
				{
					content: "Cập nhật thành công",
					className: "",
					style: {
						marginTop: "20vh"
					}

				}
			)




		}



		)



		// var _dataPhone = new FormData();
		// if (file === null) {
		// 	setFile(() => {
		// 		return fileRef.current.files[0];
		// 	});
		// }
		// _dataPhone.append("title", title);
		// _dataPhone.append("listPrice", listPrice);
		// _dataPhone.append("standCost", standCost);
		// _dataPhone.append("brand", brand);
		// _dataPhone.append("colors", colors);
		// _dataPhone.append("info", info);
		// _dataPhone.append("slug", slug);
		// _dataPhone.append("screen", screen);
		// _dataPhone.append("os", os);
		// _dataPhone.append("img", file);

		// for (let i = 0; i < arrFile.length; i++) {
		// 	_dataPhone.append("galleryOld", arrFile[i]);
		// }
		// for (let i = 0; i < fileInput.length; i++) {
		// 	_dataPhone.append("galleryNew", fileInput[i]);
		// }
		// _dataPhone.append("camBack", cameraBehind);
		// _dataPhone.append("camFront", cameraBefore);
		// _dataPhone.append("chip", chip);
		// _dataPhone.append("ram", ram);
		// _dataPhone.append("rom", rom);
		// _dataPhone.append("sim", sim);
		// _dataPhone.append("pin", pin);
		// _dataPhone.append("quantity", quantity);
		// console.log(standCost);


		// async function postData(url = "", data = new FormData()) {
		// 	const response = await fetch(url, {
		// 		method: "PUT",
		// 		redirect: "follow",
		// 		body: data,
		// 	});
		// 	console.log(response);
		// 	return response;
		// }

		// postData(baseURL_.data + "/products/" + data.id, _dataPhone).then((data) => {
		// 	console.log(data);
		// });
		// navigate("/products");
	};
	return (
		<div className="new">
			<div className="newContainer">
				<div className="top">
					<h1>{title}</h1>
				</div>
				<div className="bottom">
					<div className="left">
						<div className="imgcontent flex flex-wrap gap-3 border-2 p-5">
							{images.map((item) => (
								<img
									className="drop-shadow-md"
									src={item.path}
									alt=""
									onClick={() => {
										if (confirm("Bạn có muốn xóa không?")) {
											setArrFile((currentFile) => {
												return currentFile.filter((e) => e !== item);
											});
										}
									}}
								/>
							))}
						</div>
					</div>
					<div className="right">
						<form onSubmit={handleSubmit}>
							{/* <div className="formInput">
								<label htmlFor="file">
									Image: <DriveFolderUploadOutlinedIcon className="icon" />
								</label>
								<input
									type="file"
									id="file"
									ref={fileRef}
									onChange={(e) => {
										setFile(e.target.files[0]);
										data.img = URL.createObjectURL(e.target.files[0]);
									}}
									style={{ display: "none" }}
								/>
							</div> */}


							{
								<div className="formContainer">
									{productInputs.map((input) => {
										return (
											<div className="formInput" key={input.id}>
												<label>{input.label}</label>
												<div className="border-[2px] rounded-[2px]">
													<input id={input.title} />
												</div>
											</div>
										);
									})}


								</div>
							}


							{/* <div className="formInput">
								<label htmlFor="file1">
									Image: <DriveFolderUploadOutlinedIcon className="icon" />
									<input
										type="file"
										id="file1"
										onChange={(e) => {
											setFileInput((currentFile) => {
												return [...currentFile, ...e.target.files];
											});
											console.log(fileInput);
										}}
										style={{ display: "none" }}
										multiple
									/>
								</label>
							</div> */}


							{/* <div className="imgcontent flex flex-wrap gap-3">
								{arrFile.map((img, index) => (
									<img
										src={img}
										alt=""
										onClick={() => {
											if (confirm("Bạn có muốn xóa không?")) {
												setArrFile((current) => {
													return current.filter((e) => e !== img);
												});
											}
										}}
									/>
								))}
								{fileInput.map((item) => {
									return (
										<img
											src={URL.createObjectURL(item)}
											alt=""
											onClick={() => {
												if (confirm("Bạn có muốn xóa không?")) {
													setFileInput((currentFile) => {
														return currentFile.filter((e) => e !== item);
													});
												}
											}}
										/>
									);
								})}
							</div> */}



							<div className="flex gap-4 w-full justify-end px-4 py-2">
								<input
									className="flex justify-center items-center bg-[#15a0cf] text-white px-9 py-2 hover:cursor-pointer hover:drop-shadow-md"
									value="Cập nhật"
									type="submit"
								/>
								<div
									className="flex justify-center items-center bg-[#ff213f] text-white px-6 hover:cursor-pointer hover:drop-shadow-md"
									onClick={() => {
										navigate(-1);
									}}
								>
									Trở về
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditProduct;

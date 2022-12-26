import "../new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useRef } from "react";
import { ProductService } from "~/services";
import { message } from 'antd';
import { addProductInputs } from "../../../InputOfForm";
import { useEffect } from "react";



const NewLaptop = ({ title }) => {
	document.title = "Thêm sản phẩm mới";
	const [brand, setBrand] = useState('');
	const [screen, setScreen] = useState('');
	// const [arrFile, setArrFile] = useState(null);
	// console.log(arrFile)
	const [image, setImage] = useState('');
	const fileRef = useRef();

	const [file, setFile] = useState(null);
	const brands = [
		{
			id: 1,
			name: 'ASUS'
		},
		{
			id: 2,
			name: 'ACER'
		},
		{
			id: 3,
			name: 'LENOVO'
		},
		{
			id: 4,
			name: 'HP'

		},
		{
			id: 5,
			name: 'DELL'
		},
		{
			id: 6,
			name: 'GYGABYTE'
		}
	]

	const screens = [
		{
			id: 1,
			name: "LCD"

		},
		{
			id: 2,
			name: "IPS"
		},
		{
			id: 3,
			name: "OLED/AMOLED"

		},
		{
			id: 4,
			name: "Retina"
		}
	]






	var _dataImage = new FormData();
	if (file === null) {
		setFile(() => {
			return fileRef.current?.files[0];
		});
	}
	_dataImage.append("file", file);


















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
		const screenId = Number(screen);
		const moreDescriptionHTML = document.getElementById("description").value;
		const categoryId = 1;
		const releasedDate = document.getElementById("releaseDate").value;
		const brandId = Number(brand);


		const data = {
			id, name, listedPrice, price, quantityInStock, ramCapacity, cpuMoreInformationHTML
			, screenId, brandId, moreDescriptionHTML, categoryId, cpuBrand, cpuType, releasedDate
		}


		ProductService.uploadImage(_dataImage).then((res) => {

			const dataImage = {

				productId: id,
				path: res.data.data.replace('E:\\laptop_backend\\ecommerce-api\\uploads','http://localhost:8088/api/v1/files'),
				type: 'ADVERTISE'

			}

			ProductService.addProduct(data).then((res) => {
				console.log(res)
				message.success(
					{
						content: "Thêm sản phẩm thành công",
						className: "",
						style: {
							marginTop: "20vh"
						}
	
					})
			})
	
			setTimeout(() => {
				ProductService.postImage(dataImage).then((res) => {
					console.log(res);
				})
	
			}, 1000);
		});





		console.log(dataImage);



		






	}















	return (
		<div className="new">
			<div className="newContainer">
				<div className="top">
					<h1>{title}</h1>
				</div>
				<div className="bottom">

					<div className="left">


						<div className="formInput">
							<label htmlFor="file">
								Image: <DriveFolderUploadOutlinedIcon className="icon" />
							</label>
							<input
								type="file"
								id="file"
								onChange={(e) => {
									setFile(e.target.files[0]);
								}}
							// style={{ display: "none" }}
							/>
						</div>
						{/* 
						<div className="formInput">
							<label htmlFor="file1">
								Image: <DriveFolderUploadOutlinedIcon className="icon" />
							</label>
							<input
								type="file"
								id="file1"
								onChange={(e) => {
									setArrFile((currentFile) => {
										return [...currentFile, ...e.target.files];
									});
								}}
								style={{ display: "none" }}
								
							/>
						</div> */}

						{/* <div className="imgcontent flex flex-wrap gap-3 border-2 p-5">
							{arrFile.map((item) => (
								<img
									className="drop-shadow-md"
									src={URL.createObjectURL(item)}
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
						</div> */}




					</div>
					<div className="right">
						<form onSubmit={handleSubmit}>


							<div className="formContainer">
								{addProductInputs.map((input) => (
									<div className="formInput " key={input.id}>
										<label>{input.label}</label>
										<div className="border">
											<input

												id={input.title}
												required
											/>
										</div>
									</div>
								))}

								<div className="w-[200px] h-[60px]">
									<span className="inline-block text-[#000]">
										Hãng sản xuất
									</span>
									<div className="w-full h-[60px]">
										<select
											tabIndex={-1}
											aria-hidden="true"
											className="w-full h-[60px] p-1 border"
											onChange={(e) => setBrand(e.target.value)}
										>
											<option data-select2-id="select2-data-81-rsyi" value="">
												Chọn hãng sản xuất
											</option>

											{
												brands.map((b) => (
													<option
														className="text-[#161D25]"
														value={b.id}
														key={b.id}
													>
														{b.name}
													</option>
												))}
										</select>
									</div>


								</div>


								<div className="w-[200px] h-[60px]">
									<span className="inline-block text-[#000]">
										Màn hình
									</span>
									<div className="w-full h-[60px]">
										<select
											tabIndex={-1}
											aria-hidden="true"
											className="w-full h-[60px] p-1 border"
											onChange={(e) => setScreen(e.target.value)}
										>
											<option data-select2-id="select2-data-81-rsyi" value="">
												Chọn màn hình
											</option>

											{
												screens.map((s) => (
													<option
														className="text-[#161D25]"
														value={s.id}
														key={s.id}
													>
														{s.name}
													</option>
												))}
										</select>
									</div>


								</div>




							</div>


							<div className="flex gap-4 w-full justify-end px-4 py-2">
								<input
									className="flex justify-center items-center bg-[#15a0cf] text-white px-9 py-2 hover:cursor-pointer hover:drop-shadow-md"
									value="Thêm"
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


export default NewLaptop;

import "./navbar.scss";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";


const Navbar = () => {


	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="text-[#00B5D1] font-bold text-[20px] rounded-md shadow-md flex items-center h-[40px] p-4">
					<h1>LAPTECH ADMINSTRATOR</h1>
				</div>
				<div className="items">
					<div className="item">
						<LanguageOutlinedIcon className="icon" />
						Tiếng việt
					</div>
					<div className="item">
						<img
							src="https://kenh14cdn.com/203336854389633024/2020/12/31/photo-1-16094117624341764656274.jpg"
							alt=""
							className="avatar"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

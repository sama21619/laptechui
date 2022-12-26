import { useState } from "react";
import clsx from "clsx";
import styles from "./login.module.scss";
import authService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
const Login = () => {

	document.title = "Đăng nhập";
	const navigate = useNavigate();
	const [login, setLogin] = useState(true);
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [isFobbiden, setIsFobbiden] = useState(false);

	const handleUserName = (event) => {
		setUserName(event.target.value);
	};
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const [alert, setAlert] = useState(false);

	const handleLoginSubmit = async (event) => {

		event.preventDefault();
		try {
			console.log(userName, password);
			const res = await authService.login(userName, password);
			console.log(res);
			if (res) {
				localStorage.setItem("userInfo", JSON.stringify(res));
				navigate("/");
			}
		}

		catch (error) {
			console.log(error);
			setAlert(true);
			setIsFobbiden(false);
		}
	};

	const handleSignupSubmit = () => {
		
		const userName = document.getElementById("nameAccount").value;
		const password = document.getElementById("password").value;
		const confirmPassword = document.getElementById("confirmPassword").value;



		if (password !== confirmPassword) {
			message.error(
				{
					content: "Tên tài khoản hoặc mật khẩu không đúng",
					className: "",
					style: {
						marginTop: "20vh"
					}
	
				}
			)
			
		} else {
			const data = { userName, password, confirmPassword };


			try {
				authService.register(data).then((res) => {
					console.log(res);

				}

				);
			} catch (error) {
				console.log(error);
			}
		}
	};

	

	return (
		<div className={styles.body}>
			<div className={styles.container}>
				<div className={styles.backbox}>
					<div className={clsx(styles.loginMsg, !login && styles.hide)}>
						{" "}
						<div className={styles.textcontent}>
							<p className={styles.title}>Bạn chưa có tài khoản?</p>
							<p>Đăng ký để trở thành nhân viên và chờ được phê duyệt</p>
							<button
								id="switch1"
								onClick={() => {
									setAlert(false);
									setIsFobbiden(false);
									setLogin(false);
								}}
							>
								Đăng ký
							</button>
						</div>
					</div>
					<div className={clsx(styles.signupMsg, login && styles.hide)}>
						<div className={styles.textcontent}>
							<p className={styles.title}>Bạn đã có tài khoản?</p>
							<p>Đăng nhập để vào hệ thống Admin.</p>
							<button id="switch2" onClick={() => setLogin(true)}>
								Đăng nhập
							</button>
						</div>
					</div>
				</div>

				<div className={styles.frontbox}>
					<form onSubmit={handleLoginSubmit} className={clsx(styles.login, !login && styles.hide)}>
						<h2 className="font-bold mb-6 mt-[60px]">ĐĂNG NHẬP</h2>
						<div>
							<label className="w-full flex justify-start flex-col items-start gap-2">
								<h3 className="font-semibold">Tên tài khoản</h3>
								<input
									type="text"
									name="text"
									value={userName}
									onChange={handleUserName}
									tabIndex={1}
									required
								/>
							</label>
							<label className="w-full flex justify-start flex-col items-start gap-2">
								<h3 className="font-semibold">Mật khẩu</h3>
								<input
									type="password"
									name="password"
									value={password}
									onChange={handlePasswordChange}
									placeholder="password"
									tabIndex={2}
									required
								/>
							</label>
							<button type="submit">Đăng nhập</button>
						</div>
					</form>
					<div className="flex justify-center">
						{alert && (
							<p className="text-red-600 mt-2 font-semibold">
								Sai thông tin tài khoản hoặc mật khẩu!
							</p>
						)}
						{isFobbiden && (
							<p className="text-red-600 mt-2 font-semibold">
								Tài khoản của bạn không có quyền! <br /> Hãy đợi quản trị viên phê duyệt
							</p>
						)}
					</div>
					<form onSubmit={handleSignupSubmit} className={clsx(styles.signup, login && styles.hide)}>
						<div className="mt-[30px]">
						<h2 className="font-bold mb-6 mt-[60px]">ĐĂNG KÝ</h2>

							<label className="w-full flex justify-start flex-col items-start gap-1 mt-3">
								Tên
								<input
									id="nameAccount"
									type="text"
									name="nameAccount"
									placeholder="Tên tài khoản"
									tabIndex={1}
									required
								/>
							</label>

							<label className="w-full flex justify-start flex-col items-start gap-1 mt-3">
								Mật khẩu
								<input
									type="password"
									name="password"
									placeholder="Mật khẩu"
									tabIndex={3}
									required
									id="password"
								/>
							</label>
							<label className="w-full flex justify-start flex-col items-start gap-1 mt-3">
								Nhập lại mật khẩu
								<input
									type="password"
									name="password"
									placeholder="Nhập lại mật khẩu"
									tabIndex={3}
									required
									id="confirmPassword"
								/>
							</label>
						</div>
						<div
							className="bg-[#CB1C22] h-[65px] flex justify-center items-center mt-6 text-white text-xl cursor-pointer	"
							onClick={handleSignupSubmit}
						>
							Đăng ký
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;

import firebase from 'firebase';
import { LogoutOutlined } from '@ant-design/icons'

const LogOut = () => {


    const handleLogOut = () => {
        if (confirm('Bạn có muốn thoát không?')) {
            try {
                firebase
                    .auth()
                    .signOut()
                    .then(() => {
                        console.log('Đăng xuất thành công');
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                localStorage.removeItem('customerInfo');
                localStorage.removeItem('_grecaptcha');
                location.reload();

            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className="flex justify-end my-4">


            <div className="flex items-center text-[#CB1C22]">
                <LogoutOutlined />
                <span className="cursor-pointer text-[#CB1C22] mx-2" onClick={(e) => handleLogOut(e)}>
                    Thoát tài khoản
                </span>


            </div>
        </div>
    );
};
export default LogOut;

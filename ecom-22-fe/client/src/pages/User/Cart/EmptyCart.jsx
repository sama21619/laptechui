import { Link } from 'react-router-dom';
import { CartXFill } from 'react-bootstrap-icons';
function EmptyCart() {
    return (
        <div className="flex items-center justify-center flex-col h-[45vh] gap-4 bg-white">
            <i>
                <CartXFill className="text-9xl text-red-600" />
            </i>
            <p>Không có sản phẩm nào trong giỏ hàng</p>
            <Link to="/">
                <button className="bg-[#cb1c22] text-[#fff] font-semibold px-2 rounded-lg uppercase h-20">
                    Về trang chủ
                </button>
            </Link>
           
        </div>
    );
}

export default EmptyCart;

import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';
import CartButton from './CartButton';
import styles from './header.module.scss';
import './header.module.scss';
import { getHistoryOrders } from '~/redux/history/historyOrdersApi';
import { useDispatch, useSelector } from 'react-redux';
import {UserOutlined } from '@ant-design/icons';
function Header() {
    const dispatch = useDispatch();
    const handleOrderClick = () => {
        const phoneNumber = JSON.parse(localStorage.getItem('user')).phoneNumber.toString();
        const userPhoneNumber = phoneNumber.replace('+84', '0');
        getHistoryOrders(dispatch, userPhoneNumber);
    };
    return (
        <header className={styles.heading + ' pb-3'}>
            <div className={styles.top}>
                <div className={styles.wrap}>
                    <Link to="/">
                        <div className={styles.logo}></div>
                    </Link>
                    <SearchInput />
                    
                    <Link to="/history" className="w-40 text-center" onClick={handleOrderClick}>
                        <UserOutlined/> Tài khoản của tôi
                    </Link>
                    <Link to="/cart">
                        <CartButton />
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;

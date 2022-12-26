import { useEffect } from 'react';
import DangNhap from './DangNhap';
import { useDispatch } from 'react-redux';
import { getHistoryOrders } from '~/redux/history/historyOrdersApi';
import Info from './Info';
const History = () => {
    let customer = JSON.parse(localStorage.getItem('customerInfo'));
    let phoneNumber = customer?.phone
    const dispatch = useDispatch();
    useEffect(() => {
        getHistoryOrders(dispatch, phoneNumber);
    }, [phoneNumber]);

    return <div>{customer ? <Info /> : <DangNhap />}</div>;
};
export default History;

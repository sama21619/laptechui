import { useState } from 'react';
import LogOut from './LogOut';
import Profile from './Profile';
import clsx from 'clsx';
import OrderTable from './OrderTable';

function Info() {
    const [tab, setTab] = useState(1);

    const activeTabStyle = 'bg-blue-300 text-white rounded-[2px]';




    return (
        <div className="bg-white min-h-[100vh]">
            <div className="w-full max-w-[1200px] mx-auto py-8">
                <LogOut />
                <div className="mr-8 flex border-b">

                    <div
                        onClick={() => setTab(1)}
                        className={clsx(
                            'flex w-full items-center my-2 p-4 cursor-pointer',
                            1 === tab && activeTabStyle,
                        )}
                    >
                        <div className="w-12 h-12 items-center">
                            <img
                                className="object-cover"
                                src="https://cdn-icons-png.flaticon.com/512/4926/4926095.png"
                            ></img>
                        </div>
                        <p className="text-2xl font-medium ml-4">Thông tin khách hàng</p>
                    </div>

                    <div
                        onClick={() => setTab(2)}
                        className={clsx(
                            'flex w-full items-center my-2 p-4 cursor-pointer',
                            2 === tab && activeTabStyle,
                        )}
                    >
                        <div className="w-12 h-12 items-center">
                            <img
                                className="object-cover"
                                src="https://cdn-icons-png.flaticon.com/512/1322/1322149.png"
                            />
                        </div>
                        <p className="text-2xl font-medium ml-4">Lịch sử đơn hàng</p>
                    </div>


                </div>
                <div className="">

                    {tab === 1 ?  <Profile /> : <OrderTable />}

                </div>
            </div>
        </div>
    );
}

export default Info;

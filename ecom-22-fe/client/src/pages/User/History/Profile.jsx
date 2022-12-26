import { useState, useEffect } from 'react';
import { customerService } from '../../../services/customer.service';
import { message } from 'antd';



const Profile = (props) => {
    const user = JSON.parse(localStorage.getItem('customerInfo'));


    const [checkGender, setCheckGender] = useState(user.gender);
    const [edit, setEdit] = useState(false);

    const [name, setUserName] = useState(user.name);
    const [phone, setPhone] = useState(user.phone);
    const [date, setDate] = useState(user.dateOfBirth);
    const [email, setEmail] = useState(user.email);


    const choiceGender = [
        {
            id: "Nam",
            content: 'MALE',
        },
        {
            id: "Nữ",
            content: 'FEMALE',
        },

    ];

    const handleClickGender = (gender) => {
        setCheckGender(gender);
    };

    const data = {
        id: user.id,
        name: name,
        phone: phone,
        dateOfBirth: date,
        email: email,
        gender: checkGender
    };


    const handleSubmitInfo = (e) => {
        e.preventDefault();
        customerService.updateCustomerById(user.id, data)
        localStorage.setItem('customerInfo', JSON.stringify(data));



        message.success(
            {
                content: "Cập nhật thành công",
                className: "",
                style: {
                    marginTop: "20vh"
                }

            }
        )
        setTimeout(() => {
            window.location.reload()

        }, 2000)




    };

    return (
        <div className="text-gray-800 py-8 flex flex-col">
            <div className="flex justify-center items-center">
                <h3 className="font-semibold text-4xl mb-3">Thông tin cá nhân</h3>

            </div>

            <form onSubmit={(e) => handleSubmitInfo(e)}>
                <div className='flex flex-col w-1/2'>


                    <div className="my-4 flex flex-col ">
                        <label>Họ và tên: </label>
                        <input
                            type="text"
                            name="username"
                            value={name}
                            className="text-2xl py-4 rounded-xl border-gray-200 my-4"
                            disabled={!edit}
                            id="username"
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                            required
                        />

                        <label>Số điện thoại: </label>
                        <input
                            type="tel"
                            name="id"
                            className="text-2xl py-4 rounded-xl border-gray-200 bg-[#cccccc] text-[#666666] my-4"
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value);
                            }}
                            disabled
                            id="tel"
                            required
                        />
                        <label>Ngày sinh: </label>

                        <input
                            type="text"
                            name="date"
                            className="text-2xl py-4 rounded-xl border-gray-200 my-4"
                            value={date}
                            onChange={(e) => {
                                setDate(e.target.value);
                            }}
                            disabled={!edit}
                            id="date"
                            required
                        />
                        <label>Email: </label>


                        <input
                            type="text"
                            name="email"
                            className="text-2xl py-4 rounded-xl border-gray-200 my-4"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            disabled={!edit}
                            id="email"
                            required
                        />
                    </div>


                    <div className="w-full flex gap-3 items-center">
                        {choiceGender.map((item, index) => (
                            <div key={index}>
                                <input
                                    className="p-2"
                                    checked={checkGender === item.content}
                                    type="radio"
                                    onClick={() => handleClickGender(item.content)}
                                ></input>
                                <label className="ml-2">{item.id}</label>
                            </div>
                        ))}
                    </div>

                </div>
                <div className='flex'>

                    <div className="cursor-pointer text-white px-7 py-3 bg-[#CB1C22] mt-4 rounded-md w-[112px] mr-[20px] text-center" onClick={(e) => setEdit((old) => !old)}>
                        {edit ? 'Hủy' : 'Sửa'}
                    </div>


                    {edit && (
                        <button
                            type="submit"
                            disabled={!edit}
                            className="cursor-pointer text-white px-7 py-3 bg-[#CB1C22] mt-4 rounded-md"
                        >
                            CẬP NHẬT
                        </button>
                    )}
                </div>

            </form>
        </div>
    );
};
export default Profile;

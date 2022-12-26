import clsx from 'clsx';
import { React, useState, useEffect } from 'react';
import firebase from '~/firebase';
import styles from './dangnhap.module.scss';
import { customerService } from '~/services';

const DangNhap = () => {


    const [txtPhoneNumber, setTxtPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [flag, setFlag] = useState(false);


    const configureCaptcha = () => {

        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            size: 'invisible',
            callback: (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                handleSubmit();
                console.log('Recaptca varified');
            },
            defaultCountry: 'VN',
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        const phoneNumber = '+84' + txtPhoneNumber;
        if (phoneNumber.length < 10 || phoneNumber === '' || phoneNumber === undefined) {
            alert('Số điện thoại không hợp lệ');
        }
        else {
            setFlag(true);
            configureCaptcha();
            const appVerifier = window.recaptchaVerifier;

            console.log(phoneNumber);

            firebase
                .auth()
                .signInWithPhoneNumber(phoneNumber, appVerifier)
                .then((confirmationResult) => {
                    // SMS sent. Prompt user to type the code from the message, then sign the
                    // user in with confirmationResult.confirm(code).
                    window.confirmationResult = confirmationResult;
                    console.log('OTP has been sent');
                })
                .catch((error) => {
                    console.log('SMS has been not sent');

                    console.log(error);
                    appVerifier.clear();
                });
        }
    };

    const submitOTP = (e) => {

        e.preventDefault();
        const code = otp;

        window.confirmationResult
            .confirm(code)
            .then((result) => {
                //User signed in successfully.
                

                customerService.getCustomerByPhone(txtPhoneNumber).then((res) => {
                    if (res) {
                        console.log(res)


                        localStorage.setItem('customerInfo', JSON.stringify(res));
                        window.location.reload();
                    }

                 

                });
            })
            .catch((error) => {
                console.log(error)
            });
    };

    const changeNum = (e) => {
        e.preventDefault();
        setFlag(false);
    };
    return (
        <section className={styles.login}>
            <div className={clsx('d1', 'step1')} style={{ display: !flag ? 'block' : 'none' }}>
                <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=2000"></img>
                <span>TRA CỨU THÔNG TIN ĐƠN HÀNG</span>
                <form id="frmGetVerifyCode" onSubmit={(e) => handleSubmit(e)}>
                    <div id="sign-in-button" style={{ display: 'none' }}></div>

                    <input
                        type="tel"
                        value={txtPhoneNumber}
                        placeholder="Nhập số điện thoại mua hàng"
                        autoComplete="off"
                        maxLength="10"
                        onChange={(e) => setTxtPhoneNumber(e.target.value)}
                    ></input>
                    <button type="submit" className={styles.btn} id="submitPhone">
                        Tiếp tục
                    </button>
                </form>
            </div>

            <div className={clsx('d2', 'step2')} style={{ display: flag ? 'block' : 'none' }}>
                <span className="s1">
                    Mã xác nhận đã được gửi đến số điện thoại <b>{txtPhoneNumber}</b>
                </span>
                <form id="frmSubmitVerifyCode" onSubmit={(e) => submitOTP(e)}>
                    <input
                        type="number"
                        maxLength="6"
                        value={otp}
                        placeholder="Nhập mã xác nhận"
                        onChange={(e) => setOtp(e.target.value)}
                    ></input>
                    <button className={styles.btn} id="submitOTP">
                        Tiếp tục
                    </button>
                </form>


                <a className={styles.btnChangeNum} onClick={(e) => changeNum(e)}>
                    Thay đổi số điện thoại
                </a>
            </div>
        </section>
    );
};
export default DangNhap;

// https://www.youtube.com/watch?v=lDzBtOo1S8Y

import { Facebook, Tiktok } from 'react-bootstrap-icons';
import styles from './footer.module.scss';
function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.wrap}>
                    <ul>
                        <li className='text-[#3399d2]'>Giới thiệu về Laptech</li>
                        <li className='text-[#3399d2]'>Câu hỏi thường gặp mua hàng</li>
                        <li className='text-[#3399d2]'>Chính sách bảo mật</li>
                        <li className='text-[#3399d2]'>Quy chế hoạt động</li>
                        <li className='text-[#3399d2]'>Kiểm tra hóa đơn điện tử</li>
                        <li className='text-[#3399d2]'>Tra cứu thông tin bảo hành</li>
                    </ul>
                    <ul>
                        <li className='text-[#3399d2]'>Tin tuyển dụng</li>
                        <li className='text-[#3399d2]'>Tin khuyến mãi</li>
                        <li className='text-[#3399d2]'>Hướng dẫn mua online</li>
                        <li className='text-[#3399d2]'>Hướng dẫn mua trả góp</li>
                        <li className='text-[#3399d2]'>Chính sách trả góp</li>
                        <li className='text-[#3399d2]'>Giới thiệu máy đổi trả</li>
                    </ul>
                    <ul>
                        <li className='text-[#3399d2]'>Hệ thống cửa hàng</li>
                        <li className='text-[#3399d2]'>Hệ thống bảo hành</li>
                        <li className='text-[#3399d2]'>Tư vấn mua hàng (Miễn phí): 0345290616</li>
                        <li className='text-[#3399d2]'>Chính sách đổi trả</li>
                        <li className='text-[#3399d2]'>Góp ý, khiếu nại dịch vụ: (8h00-22h00) 0345290616</li>
                        <li className='text-[#3399d2]'>Hỗ trợ kỹ thuật: 0345290616</li>
                    </ul>
                    <div className={styles.logo}>
                        <i>
                            <Facebook />
                            &ensp;<span>2M  Đăng ký</span>
                        </i>
                        &ensp;
                        <i>
                            <Tiktok />
                            &ensp;<span>1M Followers</span>
                        </i>
                        <img src="/images/ct.png" /> &ensp;
                        <p>Website cùng tập đoàn</p>
                        <img src="/images/LAPTECH-ECOM.png" />
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>
                    © 2022. Công ty cổ phần công nghệ Laptech. GPDKKD: 03034334 do sở KH & ĐT TP.HCM cấp ngày
                    21/08/2019. GPMXH: 211/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 04/06/2020. Địa chỉ: Số 1 Võ Văn Ngân, Phường Linh Chiểu, Quận Thủ Đức, TP.HCM. Điện thoại: 0345290616. Email:
                    19110447@student.hcmute.edu.vn 
                </p>
            </div>
        </footer>
    );
}

export default Footer;

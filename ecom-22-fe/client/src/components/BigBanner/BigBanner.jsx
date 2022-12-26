import './bigbanner.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const images = [
    'https://i.pinimg.com/originals/ef/80/83/ef8083bfe79088dc00bd8eca9c821cd5.jpg',
    'https://mac24h.vn/images/companies/1/ThinkPad/Lenovo%20Yoga%206/yoga%206%20lenovo/lenovo-banner-thinkpro.jpg?1653365659939',
    'https://mac24h.vn/images/companies/1/ThinkPad/thinkpadbanner.jpg?1597255128952',
    'https://blog.daraz.com.bd/wp-content/uploads/2019/10/best-hp-laptop-banner.png',
    
];
const BigBanner = () => {
    return (
        <div className="container__bigbanner">
            <div className="containner__body">
                <div className="containner__first-item">
                    <Slider dots={true} slidesToShow={1} slidesToScroll={1} autoplay={true} autoplaySpeed={2000}>
                        {images.map((src) => (
                            <div className="owl-item" style={{ width: 800 }}>
                                <div className="item">
                                    <a href="">
                                        <img className='h-[300px]' src={src} alt="" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="containner__second-item">
                    <div>
                        <a href="">
                            <img className='h-[150px]' src="//cdn.tgdd.vn/2022/05/banner/sticky-intel-390-97-390x97.png" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <img className='h-[150px]'  src="//cdn.tgdd.vn/2022/06/banner/Xa-hang-Laptop-2-390x97-1.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BigBanner;

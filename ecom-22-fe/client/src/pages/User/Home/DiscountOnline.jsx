import NextArrow from '~/components/Slick/NextArrow';
import PrevArrow from '~/components/Slick/PrevArrow';
import Slider from 'react-slick';
import Section from './Section';
function DiscountOnline() {
    const images = [
        'https://images.fpt.shop/unsafe/fit-in/384x180/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/7/20/637939260761612196_F_384x180-4.png',
        'https://images.fpt.shop/unsafe/fit-in/384x180/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/9/637956492110819260_Ho%CC%82%CC%83%20Tro%CC%9B%CC%A3%20Tra%CC%89%20Go%CC%81p-F_384x180.jpg',
        'https://images.fpt.shop/unsafe/fit-in/384x180/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/7/20/637939254988073687_F_384x180-6.png',
        'https://images.fpt.shop/unsafe/fit-in/384x180/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/18/638016979468850535_F_384x180%20copy%205.jpg',
       
    ];
    return (
        <Section title="ƯU ĐÃI KHI THANH TOÁN ONLINE" styles="bg-white">
            <>
                <div className="w-full">
                    <Slider
                        slidesToShow={3}
                        autoplay={true}
                        autoplaySpeed={2000}
                        slidesToScroll={3}
                        nextArrow={<NextArrow />}
                        prevArrow={<PrevArrow />}
                    >
                        {images.map((src, index) => (
                            <div className="w-full" key={index}>
                                <div className="mx-4">
                                    <a href="#">
                                        <img src={src} key={src} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </>
        </Section>
    );
}

export default DiscountOnline;

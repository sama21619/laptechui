import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import NextArrow from '~/components/Slick/NextArrow';
import PrevArrow from '~/components/Slick/PrevArrow';
import ModalBox from './ModalBox';
import { useSelector } from 'react-redux';




function SlickBlock(props) {
  
   
    const initProductImage = useSelector((state) => state.products.productImage.data);
    const result = initProductImage.filter(image => image.imageType == "ADVERTISE");
   
  
    

   

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        beforeChange: (current, next) => {
            if (current < result?.length) setCurrentIndex(next + 1);
        },
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    const [currentIndex, setCurrentIndex] = useState(1);
    return (
        <div>
            <Slider {...settings}>
                {result?.map((src, index) => (
                    <div key={index} className="" style={{ width: 800 }}>
                        <div className="h-[400px]">
                            <a href="">
                                <img src={src.path} alt="" className="h-full w-full rounded-xl object-scale-down" />
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
            <p className="text-center mt-9">
                Xem tất cả các hình ({currentIndex}/{result?.length})
            </p>
        </div>
    )
       
}

export default SlickBlock;

import { useState, useEffect } from 'react';
import ProductCard from '~/components/ProductCard';
import NextArrow from '~/components/Slick/NextArrow';
import PrevArrow from '~/components/Slick/PrevArrow';
import Slider from 'react-slick';
import { productService, promoService } from '~/services';
import Section from './Section';
function PromoFirst() {
    const [products, setProducts] = useState([]);
    
   
    useEffect(() => {
        async function getPromoProduct() {
          
            const res = await productService. getProductCards();
            setProducts(res);
        }
        getPromoProduct();
    }, []);
    return (
        <Section styles= 'rounded-xl overflow-hidden'>
            <h4 className='flex justify-end font-bold my-4 text-[2.2rem]'>SẢN PHẨM BÁN CHẠY</h4>
            <>
               
                <div className="w-full">
                    <Slider slidesToShow={4} slidesToScroll={4} nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
                        {products.map((product) => (
                            <div className="w-full" key={product.title}>
                                <div className="mx-4">
                                    <ProductCard key={product.name} {...product} data={product} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                
            </>
        </Section>
    );
}

export default PromoFirst;

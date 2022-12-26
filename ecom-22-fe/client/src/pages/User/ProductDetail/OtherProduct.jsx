import { useState, useEffect, useRef } from 'react';
import { X } from 'react-bootstrap-icons';
import Section from '~/components/Section';
import ProductCard from '~/components/ProductCard';
import Slick from '~/components/Slick';
import NextArrow from '~/components/Slick/NextArrow';
import PrevArrow from '~/components/Slick/PrevArrow';
import Slider from 'react-slick';
import { productService } from '~/services';
import { useSelector } from 'react-redux';

function OtherProduct(props) {
    const initProductDetail = useSelector((state) => state.products.productDetail.data);
    const { brand } = initProductDetail;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function getProducts() {
            const res = await productService.getProductCards();
            setProducts(res);
        }
        getProducts();
    }, [brand]);

    const tags = ['Asus', '128 GB', '8 GB', 'Chơi game', 'Acer'];

    return (
        <Section title="Xem thêm laptop khác" styles="bg-white">
            <>
                <div className="overflow-scroll flex gap-2 no-scrollbar">
                    {tags.map((tag, index) => {
                        return (
                            <button
                                className="border border-gray-300 rounded-full w-max px-8 py-4 text-gray-700 text-xl"
                                key={index}
                            >
                                {tag}
                            </button>
                        );
                    })}
                </div>
                <div className="w-full">
                    <Slider slidesToShow={5} slidesToScroll={5} nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
                        {products.map((product) => (
                            <div className="w-full" key={product.title}>
                                <div className="mx-4">
                                    <ProductCard key={product.title} {...product} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </>
        </Section>
    );
}

export default OtherProduct;

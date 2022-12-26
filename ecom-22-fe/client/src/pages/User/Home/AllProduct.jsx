import { useState, useEffect } from 'react';
import ProductCard from '~/components/ProductCard';
import Section from './Section';
import { productService } from '~/services';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Row } from 'antd';

function PromoSecond() {

    const [title, setTitle] = useState('');
    const [theme, setTheme] = useState('');
    const [products, setProducts] = useState([]);
    
    const navigate = useNavigate();

    useEffect(() => {
        async function getPromoProduct() {
            const res = await productService.getProductCards();

            setProducts(res);
        }
        getPromoProduct();
    }, []);

    return (
        <Section styles={theme}>
            <>
                <p className="uppercase text-7xl py-10 font-bold text-white text-center w-full">{title}</p>
                <div className="w-full">


                   

                </div>

                <div className="w-full flex">
                   
                    <Row gutter={0}>

                        {products.map((product, index) => (
                            
                            <Col className="gutter-row" span={6}>
                                <div className="rounded-xl overflow-hidden" key={product.title}>
                                    
                                    <div className="mx-4 py-4 rounded-xl overflow-hidden">
                                        <ProductCard {...product} />
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>



                </div>
                <Link to ='/laptop'>
                <button
                   
                    className="outline-none text-[#fff] text-2xl my-10 border bg-[#CB1C22] px-20 py-4 rounded-lg"
                >
                    Xem tất cả sản phẩm
                </button>
                </Link>
            </>
        </Section>
    );
}

export default PromoSecond;

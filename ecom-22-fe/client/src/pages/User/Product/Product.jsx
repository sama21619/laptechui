import { useState, useEffect } from 'react';
import ProductCard from '~/components/ProductCard';
import { productService } from '~/services';
import { Col, Row } from 'antd';

const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function getPromoProduct() {
            const res = await productService.getProductCards();

            setProducts(res);
        }
        getPromoProduct();
    }, []);

    return (
        <div>
            <div className="w-full flex p-8">

                <Row gutter={0}>

                    {products.map((product, index) => (

                        <Col className="gutter-row" span={4}>
                            <div className="rounded-xl overflow-hidden" key={product.title}>

                                <div className="mx-4 py-4 rounded-xl overflow-hidden">
                                    <ProductCard {...product} />
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>



            </div>


        </div>

    )

}
export default Product;
import './listproduct.scss';
import ProductCard from '../ProductCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SlideProduct from '../SlideProduct';


const ListProduct = (props) => {
    const isSlide = props.isSlide;
    const products = props.products;
 
    return (
        <>
            {isSlide ? (
                <div className="slideproduct">
                    <SlideProduct products={products}></SlideProduct>
                </div>
            ) : (
                <div className="listproduct">
                    {products.map((product) => (
                        <ProductCard {...product} />
                    ))}
                </div>
            )}

          
        </>
    );
};
export default ListProduct;

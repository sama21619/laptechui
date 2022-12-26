
import {  useParams } from 'react-router-dom';
import Comment from '~/components/Comment';
import OtherProduct from './OtherProduct';
import clsx from 'clsx';
import styles from './productdetail.module.scss';
import { Parameter, PayInfo} from './RightBlock';
import { Article,  SlickBlock } from './LeftBlock';
import { useDispatch } from 'react-redux';
import { getProductDetailApi, getProductBestDetailApi } from '~/redux/product/productsApi';
import ProductRating from '~/components/Rating';
import { getProductImages } from '~/redux/product/productsApi';
import { getComments } from '~/redux/comment/commentsApi';
import { getFeedbacks } from '~/redux/feedback/feedbacksApi';

function ProductDetail() {
    
    const { id } = useParams();

    
    const dispatch = useDispatch();

    
    getProductDetailApi(dispatch, id);
    getProductImages(dispatch, id)
    getComments(dispatch, id);
    getFeedbacks(dispatch, id);
    getProductBestDetailApi(dispatch, id);
    

    return (
        <div className={clsx('bg-white', styles.main)}>
            <div className="max-w-8xl m-auto">
                
                <div className="flex gap-8">
                    <div className={clsx(styles.left, 'w-3/5')}>
                        <SlickBlock />
                        

                        
                        <Article />
                        <ProductRating />
                    </div>
                    <div className={clsx(styles.right, 'w-2/5')}>
                       
                        <PayInfo />
                        <Parameter />
                    </div>
                </div>
                <OtherProduct />
                
                <Comment />
            </div>
        </div>
    );
}

export default ProductDetail;

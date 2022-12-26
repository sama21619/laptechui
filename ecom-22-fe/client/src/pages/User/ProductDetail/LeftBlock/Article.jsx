import ModalBox from './ModalBox';
import { useSelector } from 'react-redux';
import useCollapse from 'react-collapsed';

function Article(props) {
    const initProductDetail = useSelector((state) => state.products.productDetail.data);

    console.log(initProductDetail)
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();




    const Art = () => {
        return (
            <div>
                <div className="text-[#CB1C22] font-bold" {...getToggleProps()}>
                    {isExpanded ? 'Thu gọn' : 'Xem'}
                </div>

                <div {...getCollapseProps()}>
                    {initProductDetail.moreDescriptionHTML}



                </div>

            </div>


        )
    };
    return (
        <div>
            <h3>Thông tin sản phẩm</h3>
            <Art />
            <ModalBox />
        </div>
    );
}

export default Article;

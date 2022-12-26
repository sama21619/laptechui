import { useState, memo } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import NextArrow from '~/components/Slick/NextArrow';
import PrevArrow from '~/components/Slick/PrevArrow';
import { Modal, Tabs, Button } from 'flowbite-react';
import { useSelector } from 'react-redux';



function ModalBox(props) {
    const initProductBestDetail = useSelector((state) => state.products.productBestDetail.data);
    const initProductDetail = useSelector((state) => state.products.productDetail.data);
    const initProductImage = useSelector((state) => state.products.productImage.data);
    const result = initProductImage.filter(image => image.imageType == "ADVERTISE");


    const [showModal, setShowModal] = useState(false);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    const Art = () => {
        return (
            <div>
                <table className="w-full">
                    <tbody>



                        <tr className='bg-gray-100 flex flex-col' >
                            <td colSpan="5" className="bg-[#F5F5F5]">
                                <div className='flex'>
                                    <span>CPU:</span>&emsp;
                                    <p>{initProductBestDetail.cpuBrand}</p>

                                </div>


                            </td>

                            <td colSpan="5" className="bg-[#FFFFFF]">
                                <div className='flex'>
                                    <span>RAM:</span>&emsp;
                                    <p >{initProductBestDetail.ramCapacity} GB</p>

                                </div>


                            </td>
                            <td colSpan="5" className="bg-[#F5F5F5]">
                                <div className='flex'>
                                    <span>Màn hình:</span>&emsp;
                                    <p >
                                        {initProductBestDetail?.screen?.resolution} - {initProductBestDetail?.screen?.technology}

                                    </p>

                                </div>


                            </td>

                            <td colSpan="5" className="bg-[#FFFFFF]">
                                <div className='flex'>
                                    <span>Ổ cứng:</span>&emsp;
                                    <p>
                                        {initProductBestDetail?.hardDriveList?.length > 0 && initProductBestDetail?.hardDriveList[0]?.capacity} GB {initProductBestDetail.hardDriveList?.length > 0 && initProductBestDetail?.hardDriveList[0]?.type}</p>


                                </div>


                            </td>

                            <td colSpan="5" className="bg-[#F5F5F5]">
                                <div className='flex'>
                                    <span>Card màn hình:</span>&emsp;
                                    <p>
                                        {initProductBestDetail?.graphicCardList?.length > 0 && initProductBestDetail?.graphicCardList[0]?.type}  {initProductBestDetail.graphicCardList?.length > 0 && initProductBestDetail?.graphicCardList[0]?.model}</p>


                                </div>


                            </td>



                            <td colSpan="5" className="bg-[#FFFFFF]">
                                <div className='flex'>
                                    <span>Hệ điều hành:</span>&emsp;
                                    <p>
                                        {initProductBestDetail.cpuMoreInforHtml}</p>


                                </div>


                            </td>

                            <td colSpan="5" className="bg-[#F5F5F5]">
                                <div className='flex'>
                                    <span>Thời điểm ra mắt:</span>&emsp;
                                    <p >{initProductBestDetail.releasedDate}</p>

                                </div>


                            </td>

                        </tr>





                    </tbody>
                </table>

            </div>
        )
    };
    const data = [
        {
            title: 'Điểm nổi bật',
            content: (
                <div className="w-[1200px]">
                    <Slider {...settings}>
                        {result?.map((src, index) => (
                            <div key={index} className="" style={{ width: 800 }}>
                                <div className="h-[650px]">
                                    <a href="">
                                        <img src={src.path} alt="" className="h-full w-full rounded-xl object-scale-down" />

                                    </a>

                                </div>

                            </div>

                        ))}
                    </Slider>
                </div>
            ),

        },


        {
            title: 'Thông tin sản phẩm',

            content: <Art />,
        },
    ];
    return (
        <>

            <button
                className="border border-[#cb1c22] p-4 rounded text-[#cb1c22] w-2/3 block mx-auto my-4"
                onClick={() => setShowModal(true)}
            >
                Xem thêm chi tiết
            </button>

            <Modal show={showModal} onClose={() => setShowModal(false)} size="9xl">
                <Modal.Header></Modal.Header>
                <Modal.Body>
                    <div className="flex justify-center h-[89vh]">
                        <Tabs.Group aria-label="Tabs with underline" style="underline">
                            {data.map((item, index) => {
                                return (
                                    <Tabs.Item key={index} title={item.title}>
                                        <div className="flex justify-center">{item.content}</div>
                                    </Tabs.Item>
                                );
                            })}
                        </Tabs.Group>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default memo(ModalBox);

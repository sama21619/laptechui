import { useState } from 'react';
import { Link as LinkIcon } from 'react-bootstrap-icons';
import clsx from 'clsx';
import ModalBox from '../LeftBlock/ModalBox';
import { useSelector } from 'react-redux';
function Parameter(props) {

    const initProductBestDetail = useSelector((state) => state.products.productBestDetail.data);
    console.log(initProductBestDetail)

    return (
        <div className="mt-[220px]">
            <p className="font-bold text-3xl text-gray-800 mb-4">Cấu hình {initProductBestDetail.name}</p>
            <table className="w-full">
                <tbody>



                    <tr className='bg-gray-100 flex flex-col' >
                        <td colSpan="5" className="bg-[#F5F5F5]   border-[1px] border-[#d0021c]">
                            <div className='flex'>
                                <span>CPU:</span>&emsp;
                                <p>{initProductBestDetail.cpuBrand}</p>

                            </div>


                        </td>

                        <td colSpan="5" className="bg-[#FFFFFF]   border-[1px] border-[#d0021c]">
                            <div className='flex'>
                                <span>RAM:</span>&emsp;
                                <p >{initProductBestDetail.ramCapacity} GB</p>

                            </div>


                        </td>
                        <td colSpan="5" className="bg-[#F5F5F5]   border-[1px] border-[#d0021c]">
                            <div className='flex'>
                                <span>Màn hình:</span>&emsp;
                                <p >
                                    {initProductBestDetail?.screen?.resolution} - {initProductBestDetail?.screen?.technology}

                                </p>

                            </div>


                        </td>

                        <td colSpan="5" className="bg-[#FFFFFF]   border-[1px] border-[#d0021c]">
                            <div className='flex'>
                                <span>Ổ cứng:</span>&emsp;
                                <p>
                                    {initProductBestDetail?.hardDriveList?.length > 0 && initProductBestDetail?.hardDriveList[0]?.capacity} GB {initProductBestDetail.hardDriveList?.length > 0 && initProductBestDetail?.hardDriveList[0]?.type}</p>


                            </div>


                        </td>

                        <td colSpan="5" className="bg-[#F5F5F5]   border-[1px] border-[#d0021c]">
                            <div className='flex'>
                                <span>Card màn hình:</span>&emsp;
                                <p>
                                    {initProductBestDetail?.graphicCardList?.length > 0 && initProductBestDetail?.graphicCardList[0]?.type}  {initProductBestDetail.graphicCardList?.length > 0 && initProductBestDetail?.graphicCardList[0]?.model}</p>


                            </div>


                        </td>



                        <td colSpan="5" className="bg-[#FFFFFF]   border-[1px] border-[#d0021c]">
                            <div className='flex'>
                                <span>Hệ điều hành:</span>&emsp;
                                <p>
                                    {initProductBestDetail.cpuMoreInforHtml}</p>


                            </div>


                        </td>

                        <td colSpan="5" className="bg-[#F5F5F5]   border-[1px] border-[#d0021c]">
                            <div className='flex'>
                                <span>Thời điểm ra mắt:</span>&emsp;
                                <p >{initProductBestDetail.releasedDate}</p>

                            </div>


                        </td>

                    </tr>





                </tbody>
            </table>
        </div>
    );
}

export default Parameter;

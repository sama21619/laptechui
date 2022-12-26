import { useState, useEffect } from 'react';
import { StarFill, HeartFill, ThreeDots, ChatFill } from 'react-bootstrap-icons';
import { Modal } from 'flowbite-react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { feedbackService } from '../../services/feedback.service';
import { message } from 'antd';


const Rating = ({ onClick }) => {
    const [numberStar, setNumberStar] = useState(0);


    const active = 'text-yellow-300';


    return (

        <div className="cursor-pointer flex gap-6">
            {[...Array(5)].map((e, i) => (
                <i
                    key={i}
                    onClick={() => {
                        setNumberStar(i + 1);
                        onClick(i + 1);
                    }}
                >
                    <StarFill className={clsx('text-5xl', i + 1 <= numberStar && active)} />
                </i>
            ))}
        </div>
    );
};

const Star = ({ star }) => {
    return [...Array(star)].map((e, i) => (
        <i key={i}>
            <StarFill />
        </i>
    ));
};

function ProductRating() {



    const [content, setContent] = useState();
    const [point, setPoint] = useState();

    const initProductRating = useSelector((state) => state.feedbacks.feedback.data);

    const initProductDetail = useSelector((state) => state.products.productDetail.data);
    const dataUser = JSON.parse(localStorage.getItem('customerInfo'));










    const [showModal, setShowModal] = useState(false);

    const handleFeedback = () => {


        console.log(dataUser)


        const dataRating = {
            productId: initProductDetail.id,
            userId: dataUser?.id,
            content: content,
            ratingPoint: point,
            createdDate: "2022-11-20 16:33:31"

        }

        console.log(dataRating)





        feedbackService.postFeedback(dataRating).then((res) => {
            console.log(res)


        }
        )











    }







    return (
        <div className="border rounded-lg p-4 w-fit">
            <p className="text-3xl font-bold">Đánh giá {initProductDetail.name}</p>
            <div className="flex items-center border-b py-4">
                <div className="rating w-96">
                    <div className="my-6">

                        <span className="text-yellow-300">

                        </span>
                        &nbsp;

                    </div>

                </div>
            </div>




            {initProductRating.map((comment, index) => {


                return (
                    <div className="py-8 border-b m-4" key={index}>


                        <p>{comment.username}</p>

                        <span className="text-yellow-300">
                            <Star star={comment.feedback.ratingPoint} />
                        </span>
                        &nbsp;

                        <p className="text-2xl">{comment.feedback.content}</p>
                        <div>
                            <span className='mr-2'>{comment.feedback.createdDate}</span>
                            <span className="text-[#cb1c22] cursor-pointer select-none">Thích</span>&emsp;
                            <span
                                className="text-[#cb1c22] cursor-pointer select-none"

                            >
                                <i>
                                    <ChatFill />
                                </i>
                                &nbsp;thảo luận
                            </span>
                            &emsp;
                            <i>
                                <ThreeDots />
                            </i>

                        </div>
                    </div>
                );

            })




            }


            {dataUser ? <div className="m-auto flex gap-4 w-full">

                <button className="bg-[#cb1c22] p-4 rounded text-white w-1/2" onClick={() => setShowModal(true)}>
                    <i>
                        <StarFill />
                    </i>
                    &nbsp; Viết đánh giá
                </button>


                <Modal show={showModal} onClose={() => setShowModal(false)} size="5xl">
                    <Modal.Header>
                        <p className="text-2xl font-bold">Đánh giá {initProductDetail.name}</p>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="p-8 text-center">
                            <div className="font-bold p-4 text-2xl flex items-center justify-center">

                                <p>{initProductDetail.name}</p>
                            </div>

                            <div className="flex justify-center my-4">
                                <Rating
                                    onClick={(e) => {
                                        setPoint(e);


                                    }}
                                />
                            </div>

                            <form className="flex flex-col items-center gap-4" onSubmit={handleFeedback} >



                                <textarea
                                    className="w-full rounded-xl p-4 border border-[#cb1c22]"
                                    id=""
                                    name=""
                                    cols="30"
                                    rows="10"
                                    onChange={(e) => {
                                        setContent(e.target.value);

                                    }}
                                    value={content}
                                    placeholder="Mời bạn chia sẻ thêm một số cảm nhận về sản phẩm ..."
                                ></textarea>


                                <button type="submit" className="p-4 bg-[#cb1c22] rounded-xl text-white">
                                    Gửi đánh giá ngay
                                </button>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>


                <button

                    className="border border-[#cb1c22] p-4 rounded text-[#cb1c22] w-1/2"
                >
                    Xem {initProductRating?.length} đánh giá
                </button>
            </div>
                :
                <div>


                    Mua hàng và đăng nhập vào hệ thộng để đánh giá sản phẩm
                </div>

            }
        </div>

    );
}

export default ProductRating;

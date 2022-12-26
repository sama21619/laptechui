import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CameraFill, PersonFill, CaretUpFill } from 'react-bootstrap-icons';
import styles from './comment.module.scss';
import { getComments, postComments } from '~/redux/comment/commentsApi';
import { commentService } from '~/services';
import moment from 'moment';
import Commentmini from './commentmini';

function Comment({ replies }) {

    const [hideModal, setHideMomal] = useState(false);
    const [showboxcomment, setShowboxcomment] = useState(false);
    const [checksex, setChecksex] = useState(-1);
    const [text, setText] = useState('');
    const [sdt, setSdt] = useState('');
    const [nameuser, setNameuser] = useState('');
    const dispatch = useDispatch();
    const ref = useRef();


    
    const loadComment = useSelector((state) => state.comments.comment.data);
    const initProductDetail = useSelector((state) => state.products.productDetail.data);
    console.log(loadComment);

    const handleClicksend = () => {
        setHideMomal(true);
    };
    const data = {
        content: text,
      
        username: nameuser,
        phone: sdt,
        productId: initProductDetail.id,
      

    }
    console.log(data)
    const handleClicksend2 = (e) => {
        e.preventDefault();

        postComments(dispatch, {
            content: text,
            createDate: moment().format('HH:MM MM/DD, YYYY'),

            username: nameuser,
            phone: sdt,
            productId: initProductDetail.id,
            root_comment_id: parseInt(sdt)
        });



        setHideMomal(false);
        setShowboxcomment(false);
        window.location.reload()
    };
    const handleCloseModal = () => {
        setHideMomal(false);
    };
    const choiceSex = [
        {
            id: 1,
            content: 'Anh',
        },
        {
            id: 2,
            content: 'Chị',
        },
    ];
    const handleClickSex = (id) => {
        setChecksex(id);
    };
    const handleChangetext = (e) => {
        setText(e.target.value);
    };

  
    return (
        <div className={styles.wrap}>
            {hideModal && (
                <div>
                    <div
                        id="defaultModal"
                        tabindex="-1"
                        class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
                        aria-modal="true"
                        role="dialog"
                    >
                        <div className="fixed top-0 right-0 bottom-0 left-0 z-10 bg-black opacity-30 m-auto"></div>
                        <div class="relative p-1 w-full max-w-3xl h-full md:h-auto z-20">
                            <div class="relative bg-white rounded-lg shadow">
                                <div class="flex flex-col  items-start p-4 rounded-t border-b bg-[#cb1c22]">
                                    <div className="flex py-2 gap-x-3 mb-2 justify-between w-full">
                                        <h3 class="text-xl font-bold text-white "> Thông tin người gửi</h3>
                                        <button
                                            type="button"
                                            class=" text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-300 rounded-lg text-sm px-3 py-2 ml-auto inline-flex items-center  dark:hover:bg-gray-600 dark:hover:text-white"
                                            data-modal-toggle="defaultModal"
                                            onClick={handleCloseModal}
                                        >
                                            <svg
                                                aria-hidden="true"
                                                class="w-5 h-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span class="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    <div className="w-full flex gap-3 items-center">
                                        {choiceSex.map((item, index) => (
                                            <div key={index}>
                                                <input
                                                    className="p-2"
                                                    checked={checksex === item.id}
                                                    type="radio"
                                                    onClick={() => handleClickSex(item.id)}
                                                ></input>
                                                <label className="ml-2 text-white">{item.content}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <form class="p-6 space-y-6" onSubmit={handleClicksend2}>
                                    <div className="flex flex-col gap-6">
                                        <input
                                            name="name"
                                            type="text"
                                            className="w-full px-[5px] outline-none border-1  py-[10px] leading-[16px] text-xl"
                                            placeholder="Họ tên (bắt buộc)"
                                            onChange={(e) => setNameuser(e.target.value)}
                                            value={nameuser}
                                        ></input>

                                        <input
                                            name="sdt"
                                            type="text"
                                            className="w-full px-[5px] outline-none border-1  py-[10px] leading-[16px] text-xl"
                                            placeholder="Số điện thoại"
                                            onChange={(e) => setSdt(e.target.value)}
                                            value={sdt}
                                        ></input>
                                    </div>

                                    <div class="flex items-center justify-end p-1 space-x-2 pr-7 py-2 rounded-b border-t border-gray-300 ">
                                        <button
                                            type="submit"
                                            className="cursor-pointer text-white px-7 py-3 bg-[#cb1c22] rounded-md"
                                        >
                                            Gửi
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className={styles.head}>
                <textarea
                    ref={ref}
                    className="w-full outline-none p-2 bg-transparent"
                    rows="10"
                    onChange={handleChangetext}
                    value={text}
                ></textarea>
                <div className="flex justify-between border-t border-gray-200 p-2 items-center">
                    <div className="text-blue-400 "></div>

                    <button className="bg-[#cb1c22] text-white rounded-lg px-8 py-4" onClick={handleClicksend}>
                        Gửi
                    </button>
                </div>
            </div>
            <div className={styles.filter}></div>
            <div className={styles.body}>
                {
                    loadComment.length > 0 && 
                  
                        
                    
                
                            loadComment.map((item, index) => {
                                return <Commentmini comment={item} key={item.id}></Commentmini>;
                            })
                            


                     
                }

                
                
            </div>
        </div>
    );
}

export default Comment;

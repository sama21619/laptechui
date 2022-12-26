import styles from './filteritemtotal.module.scss';

import ButtonItem from '../Button/ButtonItem';

import { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { HandleFilter } from '../../redux/product/productsApi';
import ButtonFilterTotal from '../Button/ButtonFilterTotal';

function FilterItemTotal({ data, handle, scroll }) {
    //css
    const [isOpen, setisOpen] = useState('false');
    const item = useRef();
    const bound = useRef();
    const button = useRef();
    const itemHiden = useRef();
    const before = useRef();
    //redux + logic
    const filter = useSelector((state) => state.products.filter.data); // Lấy tất cả

    const dispatch = useDispatch();
    //const navigate = useNavigate();
    // Tạo thẻ để css thêm
    // const styleElem = document.head.appendChild(document.createElement("style"));

    // Xử lý đóng mở nút
    const handleOpen = () => {
        scroll();
        if (isOpen == 'false') {
            item.current.style.display = 'flex';
            setisOpen('true');
            button.current.style.borderColor = '#498fef';
            let div = ReactDOM.findDOMNode(button.current.firstElementChild);
            let span = div.firstElementChild;
            //Đổi chiều mũi tên
            span.style = 'border-color:  transparent transparent black  transparent;bottom: 6px;';
            before.current.style = 'display:block';

            
        } else {
            setFalse();
        }
    };

    const setFalse = () => {
        item.current.style.display = 'none';
        setisOpen('false');
        if (filter.length === 0) {
            button.current.style.borderColor = '#e1e1e1';
        }

        //Đổi chiều mũi tên
        let div = ReactDOM.findDOMNode(button.current.firstElementChild);
        let span = div.firstElementChild;
        span.style = 'border-color:black transparent transparent   transparent;bottom: 2px;';

        before.current.style = 'display:none';
    };

    // Đóng khi click ra ngoài
    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (ref.current && !ref.current.contains(event.target) && isOpen === 'true') {
                    setFalse();
                }
            };
            // Bind the event listener
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener('mousedown', handleClickOutside);
            };
        });
    };

    useOutsideAlerter(bound);

    const handleAppear = (e) => {
        const title = e.target.title;
        const id = e.target.id;
        let newKeyword = {
            [title]: id,
        };

        // // Lấy element theo tên
        const element = Array.from(document.getElementsByName(title));

        // // kiểm tra có tồn tại chưa trong filter chưa
        const checkInFilter = filter.some((element)=>{
            let value = Object.values(element)
            let key = Object.keys(element)
            if( value[0] === id && key[0] === title)
                 return true
        })

        //  // Nếu có thì bỏ ra khỏi filter
         if(checkInFilter)
         {
             element.map((curent)=>{
                if( curent.id === id)
                    curent.style = 'border-color: #e1e1e1; color:#333'
             })
             const temp =filter.filter((element)=>{
                let value = Object.values(element)
                let key = Object.keys(element)
                if(key[0] === title && value[0] ===  id);
                else{
                    return element
                }
             });
             HandleFilter(dispatch,temp)
         }
         // Nếu chưa thì thêm vào filter
         else{
            element.map((curent)=>{
                if( curent.id === id)
                curent.style = 'border-color: #498fef;color: #498fef;'
                
            })
             const temp = [
                 ...filter,
                 newKeyword,
             ]
             HandleFilter(dispatch,temp)

         }
        // Hiện nút filter
        itemHiden.current.style.display = 'block';
    };

    const handleFilter = (e) => {
        handle(true)
        setFalse()
        
    }
  
    useEffect(() => {
       
        if(filter.length > 0 )
        {
                button.current.style.borderColor = '#498fef';
                const number =(Array.from( document.getElementsByName('number')))
                number[0].style.display= 'inline'
        }
        else {
                button.current.style.borderColor = '#e1e1e1';
        }
   
     
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [handleAppear]);

    return (
        <div className={styles.bound} ref={bound}>
            {/* Nút chính */}
            <div className={styles.temp} onClick={handleOpen}>
                <ButtonFilterTotal ref={button} />
            </div>
            <span className={styles.before} ref={before}></span>
            <div className={styles.item} ref={item}>
                
                {/* Các nút con */}
                <div className={styles.wrap}>
                    {data.map((src, index) => {
                        return (
                            <div className={styles.show} key={index}>
                                <p className={styles.text}>{src.title}</p>
                                <span className={styles.click}>
                                    {src.detail.map((btn, index) => {
                                return (<div className="div" onClick={handleAppear} key={index}>
                                    
                                         {
                                            src.title==='Hãng'?
                                            <ButtonItem title={btn} name={src.title} img={src.img[index]} />
                                           : <ButtonItem title={btn}  name={src.title}/>
                                        }
                                             
                                         </div>
                                        );
                                    })}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Kết quả */}
                <div className={styles.itemHiden} ref={itemHiden}>
                    <a href="" className={styles.close}>
                        Bỏ chọn
                    </a>
                    <div href="" className={styles.open} onClick={handleFilter}>
                        Xem kết quả
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterItemTotal;

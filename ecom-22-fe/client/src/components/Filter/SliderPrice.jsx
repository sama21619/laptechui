import styles from './sliderPrice.module.scss';


import { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { HandleFilter } from '../../redux/product/productsApi';



function SliderPrice({Apper  }) {
    //css
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100000);
    const [commaMin, setCommaMin] = useState('0');
    const [commaMax, setCommaMax] = useState('100.000');

    const progress = useRef();
    const minVal = useRef();
    const maxVal = useRef();
    const itemHiden = useRef();
    const before = useRef();
    //redux + logic
    const filter = useSelector((state) => state.products.filter.data); // Lấy tất cả

    const dispatch= useDispatch();
 
   
   
    const handleInputMin= ((e)=>{
        const value = e.target.value
        
        if( !value.includes('.'))
        {
            setMin(value)
            var commas = (value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            setCommaMin(commas)
        }
        else {
            var commas = (value).toString().replace('.', '')
            
            setCommaMin(commas)
            setMin(commas)
        }
        if (max - min < 100) {
            // minVal.current.value= max-100
        } else {
            const temp = (min / 100000) * 100 + '%';
            progress.current.style.left = `${temp}`;
        }
    
    });
    const handleInputMax = (e) => {
        const value = e.target.value;

        if (!value.includes('.')) {
            setMax(value);
            var commas = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            setCommaMax(commas);
        } else {
            var commas = value.toString().replace('.', '');

            setCommaMax(commas);
            setMax(commas);
        }
        if (max - min < 100) {
            // maxVal.current.min= min+100
        } else {
            const temp = 100 - (max / 100000) * 100 + '%';
            progress.current.style.right = `${temp}`;
        }
    };

    useEffect(() => {
       
        if(min!= 0 || max !=100000)
        Apper(true)
        const temp = (min/ 100000)*100 + '%'
        progress.current.style.left = `${temp}`
        const temp1 = 100 - (max/ 100000)*100 + '%'
        progress.current.style.right = `${temp1}`

        const string = `${min}-${max}`
        // Lấy keyword
        if (min != 0 || max != 100000) {
            let newKeyword = {
                price: string,
            };
            
               // kiểm tra có tồn tại chưa trong filter chưa
            const checkInFilter = filter.some((element)=>{
                
                let key = Object.keys(element)
                
                if( key[0] == "price")
                return true
            })
           
             // Nếu có thì bỏ ra khỏi filter
            if(checkInFilter){
                const temp = filter.map(obj => {
                    if (obj.price ) {
                      return newKeyword
                    }

                    return obj;
                  });
    
                HandleFilter(dispatch,temp)
            }
            else{
                const temp = [
                    ...filter,
                    newKeyword
                ]
                HandleFilter(dispatch,temp)
            }
        }

       
           
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [min, max]);

    return (
        <div className={styles.priceBar}>
            <div className={styles.rowInput}>
                <form className={styles.range}>
                    <span className={styles.left}>
                        <input className={styles.input} type="number" maxLength="8" name="price-min-value" min="0" max="100000" value={commaMin}  onChange={(e)=>handleInputMin(e)}/>
                          
                        <label className={styles.placeHolder}>.000đ</label>
                    </span>
                    <span className={styles.right}>
                        <input className={styles.input} type="number" maxLength="8" name="price-max-value" min="0" max="100000" value={commaMax} onChange={(e)=>handleInputMax(e)} />
                            
                        <label className={styles.placeHolder}>.000đ</label>
                    </span>
                </form>
            </div>
            <div className={styles.slider}>
                <div className={styles.progress} ref={progress}></div>
            </div>
            <div className={styles.rangeInput}>
                <input
                    type="range"
                    className={styles.rangeMin}
                    min="0"
                    max="100000"
                    value={min}
                    onChange={(e) => handleInputMin(e)}
                    ref={minVal}
                />
                <input
                    type="range"
                    className={styles.rangeMax}
                    min="0"
                    max="100000"
                    value={max}
                    onChange={(e) => handleInputMax(e)}
                    ref={maxVal}
                />
            </div>
        </div>
    );
}

export default SliderPrice;

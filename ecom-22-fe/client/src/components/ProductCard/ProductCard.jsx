import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { StarFill } from 'react-bootstrap-icons';
import styles from './card.module.scss';
import numberWithCommas from '../../utils/numberWithCommas';


function ProductCard(props) {


    const list = [];
    for (let i = 0; i < props.ratingPoint; i++) {
        list.push(i);


    }

    return (
        <Link to={`/${props.id}`} >
            <div className={styles.card}>
                <div className={styles.wrap}>

                    <div className={styles.image}>
                        <img src={props.image} className={styles.img}></img>





                    </div>
                    <div className='flex gap-4'>
                        <span className="bg-[#CB1C22] text-[#fff] w-[100px] rounded-[2px] text-center"> {numberWithCommas(props.discountPrice.toFixed(0))} đ </span>
                        
                        <span className= {clsx(props.price == props.discountPrice && 'hidden' , props.price != props.discountPrice && 'text-[#939ca3] line-through w-[100px] rounded-[2px] text-center')}> {numberWithCommas(props.price)} đ </span>
                       
                        


                    </div>
                    <p className={styles.title}>{props.name}</p>

                    <div className='flex justify-evenly'>

                        <span className='w-[60px] border justify-center flex'>
                            {props.cpuType}
                        </span>
                        <span className='w-[60px] border justify-center flex '>
                            {props.cpuBrand}
                        </span>
                        <span className='w-[60px] border justify-center flex '>
                            {props.ramCapacity} GB
                        </span>

                    </div>












                    <p>
                        <span className="text-yellow-400 font-bold">
                            {
                                list.map(() => (
                                    <i>
                                        <StarFill />
                                    </i>

                                ))
                            }



                        </span>
                        <span className="text-gray-400">&ensp;({props.ratingPoint})</span>
                    </p>


                </div>
            </div>
        </Link>
    );
}

export default ProductCard;

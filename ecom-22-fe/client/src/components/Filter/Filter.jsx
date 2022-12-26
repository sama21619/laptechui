import styles from './filter.module.scss';
import ButtonFilterTotal from '../Button/ButtonFilterTotal';
import ButtonItem from '../Button/ButtonItem';
import FilterItem from './FilterItem';
import { useRef,useEffect } from 'react';
import FilterItemTotal from './FilterItemTotal';
import { HandleFilter } from '../../redux/product/productsApi';
import {  useDispatch } from 'react-redux';
function Filter({ handle, data }) {
    const contain = useRef();
    const dispatch = useDispatch();
    const scroll = () => {
        contain.current?.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() => {
        
        HandleFilter(dispatch,[])
       
         // eslint-disable-next-line react-hooks/exhaustive-deps
       }, []);
    return (
        <div className={styles.contain} ref={contain}>
            <div className={styles.filter}>
                {/* Nút đầu */}
                <FilterItemTotal data={data} handle={handle} scroll={scroll} />

                {/* Các nút sau */}
                {data.map((src) => (
                    <FilterItem data={src} key={src.id} handle={handle} scroll={scroll} />
                ))}
            </div>
        </div>
    );
}

export default Filter;

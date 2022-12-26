import { Funnel } from 'react-bootstrap-icons';

import styles from './btnFilterTotal.module.scss';
import { forwardRef, useRef } from 'react';
import { useSelector } from 'react-redux';
function ButtonFilterTotal({}, ref) {
    const filter = useSelector((state) => state.products.filter.data);
    const number = useRef();

    return (
        <div className={styles.wrap} ref={ref}>
            <span className={styles.text}>
                <i className={styles.fristIcon}>
                    <Funnel className="text-2xl mr-1" />
                </i>
                Bộ lọc
                <strong className={styles.number} name="number" ref={number}>
                    {filter.length}
                </strong>
            </span>
        </div>
    );
}

export default forwardRef(ButtonFilterTotal);

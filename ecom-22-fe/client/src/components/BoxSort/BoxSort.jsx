import styles from './boxsort.module.scss';
import { clsx } from 'clsx';
import { useState } from 'react';

const BoxSort = (props) => {
    const data = props.data;
    const [checked, setChecked] = useState([]);
    const [selected, setSelected] = useState(false);
    const handleChecked = (id) => {
        props.setChecked((prev) => {
            const isCheck = props.checked.includes(id);
            if (isCheck) {
                return props.checked.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };
    return (
        <div className={styles.boxsort}>
            <div className={styles.boxsort__body}>
                <p className={styles.boxsort__total}>
                    <b>{props.countProduct}</b>
                    <> </>
                    <strong>{props.category}</strong>
                    <> </>
                    {/* <b>{props.title.toUpperCase()}</b> */}
                </p>
                <div className={styles.checkbox}>
                    {data.map((item, index) => (
                        <div
                            href=""
                            className={styles.checkboxItem}
                            key={index}
                            onClick={() => handleChecked(item.type)}
                        >
                            <span
                                className={clsx(
                                    styles.tickCheckbox,
                                    props.checked.includes(item.type) && styles.active,
                                )}
                            ></span>
                            <i>
                                <img src={item.link} alt="" />
                            </i>
                            <span className={styles.itemTitle}>{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
            <p className={styles.click} onClick={() => props.setSelected(!props.selected)}>
                <span>Xếp theo: {props.dataSelected[props.chose].type}</span>
                {props.selected && (
                    <div className={styles.select}>
                        {props.dataSelected.map((item, index) => (
                            <p>
                                <a
                                    className={props.chose === index && styles.check}
                                    onClick={() => {
                                        props.onclick(index);
                                    }}
                                >
                                    <i></i>
                                    {item.type}
                                </a>
                            </p>
                        ))}
                    </div>
                )}
            </p>
        </div>
    );
};
export default BoxSort;

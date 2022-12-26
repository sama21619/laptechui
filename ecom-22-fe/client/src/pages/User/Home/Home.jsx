import { useEffect } from 'react';
import styles from './home.module.scss';
import BigBanner from '~/components/BigBanner';
import PromoFirst from './SliderProduct';
import PromoSecond from './AllProduct';
import DiscountOnline from './DiscountOnline';


function Home({ title }) {

   
    useEffect(() => {
        document.title = title;
    }, []);


    return (
        <div>
            <BigBanner />
            <main className={styles.main}>
                <PromoSecond />
                <PromoFirst />
                <DiscountOnline />

            </main>
        </div>
    );
}
export default Home;

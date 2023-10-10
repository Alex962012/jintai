import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './SliderForHome.module.css'
export const SliderForHome = () => {
    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="">
            <Slider {...settings}>
                <div className={styles.sliderItem}>
                    <div className={`${styles.sliderContent} ${styles.sliderPic1}`}>

                    </div>
                    <h2 className={styles.sliderContentTitle}>Компания «Цзинь Тай»</h2>
                </div>
                <div className={styles.sliderItem}>
                    <div className={`${styles.sliderContent} ${styles.sliderPic1}`}>

                    </div>
                    <h2 className={styles.sliderContentTitle}>Компания «Цзинь Тай»</h2>
                </div>
                <div className={styles.sliderItem}>
                    <div className={`${styles.sliderContent} ${styles.sliderPic1}`}>

                    </div>
                    <h2 className={styles.sliderContentTitle}>Компания «Цзинь Тай»</h2>
                </div>
            </Slider>
        </div>
    );
};

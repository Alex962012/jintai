import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SliderForHome.module.css";
import { Link } from "react-router-dom";

export const SliderForHome = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2000,
        arrows: false,
    };
    return (
        <div className={styles.sliderContainer}>

            <Slider {...settings}>
                <div className={styles.sliderItem}>
                    <div className={`${styles.sliderContent} ${styles.sliderPic1}`}>
                        <div className={styles.sliderContentTitle}>
                            <div className={styles.textContainer}>
                                <div className={styles.title}>
                                    <div className={styles.subtitle}>ПРОДАЖА СПЕЦТЕХНИКИ </div>
                                    <div className={styles.subtitle}>ИЗ КИТАЯ</div>
                                    <div className={styles.littleTitle}>в наличии и под заказ</div>
                                </div>
                                <div className={styles.buttonContainer}>
                                    <Link to="/type-catalog">
                                        <div className={styles.button}>Перейти в каталог</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className={styles.sliderItem}>
                    <div className={`${styles.sliderContent} ${styles.sliderPic2}`}>
                        <div className={styles.sliderContentTitle}>
                            <div className={styles.textContainer}>
                                <div className={styles.title}>
                                    <div className={styles.subtitle}>ПРОДАЖА СПЕЦТЕХНИКИ </div>
                                    <div className={styles.subtitle}>ИЗ КИТАЯ</div>
                                    <div className={styles.littleTitle}>в наличии и под заказ</div>
                                </div>
                                <div className={styles.buttonContainer}>
                                    <Link to="/type-catalog">
                                        <div className={styles.button}>Перейти в каталог</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </Slider>
        </div>
    );
};

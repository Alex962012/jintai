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
            <img src="../../assets/22.jpg" alt="" className={styles.img} />
            <div className={styles.sliderItem}>
                <div className={`${styles.sliderContent} ${styles.sliderPic1}`}></div>
                <div className={styles.sliderContentTitle}>
                    <div className={styles.title}>
                        <div>Поставщик спецтехники из КНР</div>
                        <div className={styles.subtitle}>на рынке уже более 8 лет</div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <Link to="/type-catalog">
                            <div className={styles.button}>Перейти в каталог</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

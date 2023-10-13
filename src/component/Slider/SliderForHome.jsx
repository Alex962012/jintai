import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SliderForHome.module.css";

// function SampleArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "none", }}
//             onClick={onClick}
//         />
//     );
// }
export const SliderForHome = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2000,
        // cssEase: "linear",
        arrows: false,
        // slidesToShow: 1,
        // slidesToScroll: 1,


    };
    return (
        <div className={styles.sliderContainer}>
            <Slider {...settings}>
                <div className={styles.sliderItem}>
                    <div className={`${styles.sliderContent} ${styles.sliderPic1}`}></div>
                    <h2 className={styles.sliderContentTitle}>Компания «Цзинь Тай»</h2>
                </div>
                <div className={styles.sliderItem}>
                    <div className={`${styles.sliderContent} ${styles.sliderPic1}`}></div>
                    <h2 className={styles.sliderContentTitle}>Компания «Цзинь Тай»</h2>
                </div>
                <div className={styles.sliderItem}>
                    <div className={`${styles.sliderContent} ${styles.sliderPic1}`}></div>
                    <h2 className={styles.sliderContentTitle}>Компания «Цзинь Тай»</h2>
                </div>
            </Slider>
        </div>
    );
};

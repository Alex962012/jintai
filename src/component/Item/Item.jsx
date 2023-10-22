import { Link } from "react-router-dom";
import styles from "./Item.module.css";

export const Item = (props) => {

    return (
        <Link to={`/specifications/${props._id}`} className={styles.logoContainer}>
            <div className={styles.itemTitleContainer}>
                <div className={styles.itemName}>{props.title}</div>
            </div>
            <div className={styles.orderItem}>
                <img
                    src={process.env.REACT_APP_API_URL + props.imageUrl[0]}
                    alt={props.title}
                    className={styles.itemPicture}
                ></img>
                <div className={styles.infoContainer}>
                    <div>Характеристики</div>
                    {props.info.map((item, index) =>
                        index < 3 ? (
                            <div key={item.number} className={styles.titlesContainer}>
                                <div className={styles.title}>{item.title}</div>
                                <div className={styles.description}>{item.description}</div>
                            </div>
                        ) : (
                            ""
                        )
                    )}
                </div>
            </div>
        </Link>
    );
};

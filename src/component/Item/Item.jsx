import { Link } from "react-router-dom";
import styles from "./Item.module.css";

export const Item = (props) => {
    console.log(props)
    return (
        <Link to={`/specifications/${props._id}`} className={styles.logoContainer}>
            <div className={styles.logo}></div>
            <div className={styles.orderItem}>
                <img
                    src={process.env.REACT_APP_API_URL + props.imageUrl[0]}
                    alt={props.title}
                    className={styles.itemPicture}
                ></img>
                <div className={styles.itemTitleContainer}>
                    <div className={styles.itemName}>{props.title}</div>
                </div>
            </div>
        </Link>
    );
};

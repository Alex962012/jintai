import styles from "./ItemTypes.module.css";
import { Link } from "react-router-dom";
export const ItemTypes = (props) => {
    return (
        <Link className={styles.item} to={`/catalog/${[props._id]}`}>
            <div >
                <img
                    src={'https://jintai-tech.ru/' + props.imageUrl}
                    alt={props.title}
                    className={styles.itemPicture}
                ></img>
                <div className={styles.itemTitleContainer}>
                    <div className={styles.itemName}>{props.name}</div>
                </div>
            </div>
        </Link>
    );
};

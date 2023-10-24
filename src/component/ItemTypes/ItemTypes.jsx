import styles from "./ItemTypes.module.css";
import { Link } from "react-router-dom";
export const ItemTypes = (props) => {
    console.log(process.env.REACT_APP_API_URL)
    return (
        <Link className={styles.item} to={`/catalog/${[props._id]}`}>
            <div >
                <img
                    src={process.env.REACT_APP_API_URL + props.imageUrl}
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

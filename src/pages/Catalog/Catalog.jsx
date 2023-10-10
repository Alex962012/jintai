import { Item } from "../../component/Item/Item";
import styles from './Catalog.module.css'
const items = require("../../items.json");

export const Catalog = () => {

    return (
        <div className={styles.orderSection}>
            <div className={styles.orderSectionTitle}>
                Каталог
            </div>

            <div className={styles.contentOrder}>
                {items.map((item) => (<Item {...item} key={item.id} />))}
            </div>
        </div>
    );
};

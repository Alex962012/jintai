import { useEffect } from "react";
import { Item } from "../../component/Item/Item";
import styles from "./Catalog.module.css";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsId } from "../../redux/slices/products";
import { Whatsapp } from "../../component/whatsaap/Whatsapp";
export const Catalog = () => {
    const params = useParams();
    const { productsId } = useSelector((state) => state.productsId);
    const dispatch = useDispatch();
    const data = productsId.items;
    useEffect(() => {
        dispatch(fetchProductsId(params.id));
    }, [dispatch, params.id]);
    return (
        <div className={styles.orderSection}>
            <div className={styles.orderSectionTitle}>
                <h1>Каталог</h1>
            </div>
            <div className={styles.contentOrder}>
                {data.map((item) => (
                    <Item {...item} key={item._id} />
                ))}
            </div>
            <Whatsapp></Whatsapp>
        </div>
    );
};

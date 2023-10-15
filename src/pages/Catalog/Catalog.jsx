import { useEffect } from "react";
import { Item } from "../../component/Item/Item";
import styles from "./Catalog.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsId } from "../../redux/slices/products";
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
                <h4>Каталог</h4>
            </div>
            <Link to="/auth">Добавить товар</Link>
            <div className={styles.contentOrder}>
                {data.map((item) => (
                    <Item {...item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

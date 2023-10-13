import { useEffect } from "react";
import { Item } from "../../component/Item/Item";
import styles from './Catalog.module.css'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/slices/products';
export const Catalog = () => {
    const params = useParams()

    const { products } = useSelector(state => state.products)
    const dispatch = useDispatch()
    const data = products.items

    useEffect(() => {
        dispatch(fetchProducts(params.id))
    }, [dispatch, params.id])

    return (
        <div className={styles.orderSection}>
            <div className={styles.orderSectionTitle}>
                Каталог

            </div>
            <Link to='/admin'>Добавить товар</Link>
            <div className={styles.contentOrder}>
                {data.map((item) => (<Item {...item} key={item.id} />))}
            </div>
        </div>
    );
};

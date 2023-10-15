import axios from "../../axios";
import styles from "./DeleteProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../redux/slices/products";
import { Link } from "react-router-dom";
export const DeleteProduct = () => {
    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch, product]);
    console.log(product);
    const data = products.items;
    const deleteProduct = async (e) => {
        e.preventDefault();
        try {
            if (product) {
                await axios.delete(`/product/remove/${product}`);
                alert("Товар удален");
                setProduct(null);
            } else {
                alert("Выберите товар для удаления");
            }
        } catch (e) {
            console.log(e);
        }
    };
    const handleChange = (event) => {
        setProduct(event.target.value);
    };
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Удаление товара</h2></div>
            <div>
                <Link to='/admin' className={styles.back}>Назад</Link>
            </div>
            <form action="" className={styles.form} onSubmit={deleteProduct}>
                <label htmlFor="products" className={styles.name}>Выберите товар для удаления :</label>
                <select className={styles.select}
                    id="products"
                    name="products"
                    select={product}
                    onChange={handleChange}
                >
                    <>
                        {" "}
                        <option>Выберите товар</option>
                    </>
                    {data.map((el) => (
                        <option value={el.id} key={el.id}>
                            {el.title}
                        </option>
                    ))}
                </select>
                <button type="submit" className={styles.button}>Удалить товар </button>
            </form>
        </div>
    );
};

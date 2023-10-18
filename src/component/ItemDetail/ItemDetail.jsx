import styles from "./ItemDetail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchProduct } from "../../redux/slices/products";
import { Gallery } from "../Gallery/Gallery";
export const ItemDetail = () => {
    const params = useParams();

    const { product } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct(params.id));
    }, [dispatch, params.id]);
    const data = product.item;
    const isProductLoading = product.status === "loading";
    return (
        <div className={styles.itemDetail}>
            <div className={styles.title}>
                <h2>{data.title}</h2>
            </div>
            <div className={styles.row}>
                <div className={styles.photogallery}>
                    {isProductLoading ? "" : <Gallery item={data.imageUrl} />}
                </div>
                <div className={styles.specificationsBlock}>
                    <div className={styles.specificationsTitle}>
                        Технические характеристики
                    </div>
                    <div className={styles.specifications}>
                        <div>
                            {data.info ? (
                                data.info.map((el) => (
                                    <div key={el._id} className={styles.itemInfo}>
                                        <div className={styles.itemInfoTitle}>{el.title}:</div>
                                        <div className={styles.itemInfoDescription}>
                                            {el.description}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

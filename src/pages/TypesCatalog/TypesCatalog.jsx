import styles from "./TypesCatalog.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchTypes } from "../../redux/slices/types";
import { ItemTypes } from "../../component/ItemTypes/ItemTypes";
export const TypesCatalog = () => {
    const { types } = useSelector((state) => state.types);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTypes());
    }, [dispatch]);
    const data = types.items;
    console.log(data)
    return (
        <div className={styles.typeCatalog}>
            {data.map((obj, index) => (
                <ItemTypes key={index} {...obj}></ItemTypes>
            ))}
        </div>
    );
};

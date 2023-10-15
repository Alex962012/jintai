import axios from "../../axios";
import styles from "./UpdateProduct.module.css";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
export const UpdateProduct = () => {
    const addType = async (e) => {
        e.preventDefault();

    };

    return (
        <div className={styles.container}>
            <h2>Изменить продукт</h2>
            <div>
                <Link to='/admin' className={styles.back}>Назад</Link>
            </div>
            <form action="" className={styles.form} onSubmit={addType}>
                {/* <label htmlFor="name">Введите название товара</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Погрузчик"
                />
                <input ref={inputFileRef} onChange={handleChangeFile} type="file" />
                <button type="submit">Создать </button> */}
            </form>
        </div>
    );
};

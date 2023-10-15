import axios from "../../axios";
import styles from "./UpdateProduct.module.css";
import { useRef, useState } from "react";
export const UpdateProduct = () => {



    const addType = async (e) => {
        e.preventDefault();

    };

    return (
        <div className={styles.container}>
            <h2>Изменить продукт</h2>
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

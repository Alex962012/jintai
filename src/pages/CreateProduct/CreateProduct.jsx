import styles from "./CreateProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { fetchTypes } from "../../redux/slices/types";

export const CreateProduct = () => {
    const { types } = useSelector((state) => state.types);
    const dispatch = useDispatch();
    const [info, setInfo] = useState([]);
    useEffect(() => {
        dispatch(fetchTypes());
    }, [dispatch]);
    const data = types.items;
    const formHandler = (e) => {
        e.preventDefault();
    };
    const addInfo = () => {
        setInfo([...info, { title: "", description: "", number: Date.now() }]);
    };
    const removeInfo = (number) => {
        setInfo(info.filter((i) => i.number !== number));
    };
    return (
        <div className={styles.container}>
            <h2>Создание товара</h2>
            <form action="" className={styles.form} onSubmit={formHandler}>
                <label htmlFor="name">Введите название товара</label>
                <input type="text" id="name" name="name" placeholder="Howo" />
                <label htmlFor="types">Выберите тип товара:</label>
                <select id="types" name="types">
                    {data.map((el) => (
                        <option value={el.id} key={el.id}>
                            {" "}
                            {el.name}
                        </option>
                    ))}
                </select>

                <input type="file" placeholder="Howo" />

                <button onClick={addInfo}>Добавить новое свойство</button>
                {info.map((i) => (
                    <div key={i.id}>
                        <label htmlFor="name">Введите название свойства</label>
                        <input type="text" id="name" name="name" placeholder="Howo" />
                        <label htmlFor="name">Введите описание свойства</label>
                        <input type="text" id="name" name="name" placeholder="Howo" />
                        <div>
                            <button onClick={() => removeInfo(i.number)}>Удалить</button>
                        </div>
                    </div>
                ))}
                <button type="submit">Создать </button>
            </form>
        </div>
    );
};

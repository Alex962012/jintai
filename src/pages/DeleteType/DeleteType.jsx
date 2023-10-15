import axios from "../../axios";
import styles from "./DeleteType.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { fetchTypes } from "../../redux/slices/types";

export const DeleteType = () => {
    const { types } = useSelector((state) => state.types);
    const dispatch = useDispatch();
    const [type, setType] = useState(null);
    useEffect(() => {
        dispatch(fetchTypes());
    }, [dispatch, type]);
    const data = types.items;

    const deleteType = async (e) => {
        e.preventDefault();
        if (type) {
            try {
                await axios.delete(`/type/remove/${type}`);
                alert("Тип удален");
                setType(null);
            } catch (e) {
                console.log(e);
            }
        }
        else {
            alert('Выберите товар для удаления')
        }
    }
    const handleChange = (event) => {
        setType(event.target.value);
    };
    return (
        <div className={styles.container}>
            <h2>Удаление категории товара</h2>
            <form action="" className={styles.form} onSubmit={deleteType}>
                <label htmlFor="types">Выберите категорию товара для удаления :</label>
                <select id="types" name="types" select={type} onChange={handleChange}>
                    <> <option >
                        Выберите товар
                    </option></>
                    {data.map((el) => (
                        <option value={el.id} key={el.id}>
                            {el.name}
                        </option>
                    ))}
                </select>
                <button type="submit">Удалить категорию </button>
            </form>
        </div>
    );
};

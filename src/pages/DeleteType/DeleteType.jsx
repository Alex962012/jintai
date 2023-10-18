import axios from "../../axios";
import styles from "./DeleteType.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTypes } from "../../redux/slices/types";

export const DeleteType = () => {
    const { types } = useSelector((state) => state.types);
    const dispatch = useDispatch();
    const [type, setType] = useState(null);
    console.log(types)
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
        } else {
            alert("Выберите товар для удаления");
        }
    };
    const handleChange = (event) => {
        setType(event.target.value);
    };
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Удаление категории товара</h2>
            </div>
            <div>
                <Link to="/admin" className={styles.back}>
                    Назад
                </Link>
            </div>
            <form action="" className={styles.form} onSubmit={deleteType}>
                <label htmlFor="types" className={styles.types}>Выберите категорию товара для удаления :</label>
                <select id="types" name="types" select={type} onChange={handleChange} className={styles.select}>
                    <>
                        {" "}
                        <option>Выберите товар</option>
                    </>
                    {data.map((el) => (
                        <option value={el._id} key={el._id}>
                            {el.name}
                        </option>
                    ))}
                </select>
                <button type="submit">Удалить категорию </button>
            </form>
        </div>
    );
};

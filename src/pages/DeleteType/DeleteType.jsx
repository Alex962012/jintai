import axios from "../../axios";
import styles from "./DeleteType.module.css";
import { useRef, useState } from "react";
export const DeleteType = () => {
    const [value, setValue] = useState("");
    const inputFileRef = useRef(null);
    const [imageUrl, setImageUrl] = useState("");
    const handleChangeFile = async (event) => {
        try {
            setImageUrl(event.target.files[0]);
        } catch (e) { }
    };

    const addType = async (e) => {
        e.preventDefault();
        console.log(value, imageUrl);
        const formData = new FormData()
        formData.append('name', value)
        formData.append('imageUrl', imageUrl)
        axios.post('/type/add', formData)
    };

    return (
        <div className={styles.container}>
            <h2>Удаление категории товара</h2>
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

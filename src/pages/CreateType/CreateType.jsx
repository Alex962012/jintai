import axios from "../../axios";
import styles from "./CreateType.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { fetchTypes } from "../../redux/slices/types";
export const CreateType = () => {
    const { types } = useSelector((state) => state.types);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTypes());
    }, [dispatch]);
    const data = types.items;
    const [value, setValue] = useState("");
    const inputFileRef = useRef(null);
    const [imageUrl, setImageUrl] = useState("");

    const handleChangeFile = async (event) => {
        try {
            setImageUrl(event.target.files[0]);
        } catch (e) {
            console.log(e);
        }
    };

    const isValidFileUploaded = (file) => {
        const validExtensions = ["png", "jpeg", "jpg"];
        const fileExtension = file.type.split("/")[1];
        return validExtensions.includes(fileExtension);
    };

    const addType = async (e) => {
        e.preventDefault();
        const result = data.filter((i) => i.name === value);

        if (imageUrl < 1 || !imageUrl) {
            alert("Выберите фотографию");
            return;
        }
        if (value < 1 || !value) {
            alert("Введите название");
            return;
        }

        if (result.length > 0) {
            alert("Такое название уже есть");
            return;
        }
        if (isValidFileUploaded(imageUrl)) {
            const formData = new FormData();
            formData.append("name", value);
            formData.append("imageUrl", imageUrl);
            try {
                axios.post("/type/add", formData);
                alert("Тип создан");
                setValue("");
            } catch (response) {
                console.log(response);
            }
        } else {
            console.log("ddd");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Создание категории товара</h2>
            </div>
            <form action="" className={styles.form} onSubmit={addType}>
                <label htmlFor="name" className={styles.name}>
                    Введите название товара
                </label>
                <input
                    className={styles.inputName}
                    type="text"
                    id="name"
                    name="name"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Погрузчик"
                />
                <input ref={inputFileRef} onChange={handleChangeFile} type="file" />
                <button type="submit">Создать </button>
            </form>
        </div>
    );
};

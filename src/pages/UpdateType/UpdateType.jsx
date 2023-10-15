import axios from "../../axios";
import styles from "./UpdateType.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { fetchTypes } from "../../redux/slices/types";
export const UpdateType = () => {
    const [type, setType] = useState(null);
    const { types } = useSelector((state) => state.types);
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    useEffect(() => {
        dispatch(fetchTypes());
    }, [dispatch, value]);
    const data = types.items;

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
    const handleChange = (event) => {
        setType(event.target.value);
    };

    const addType = async (e) => {
        e.preventDefault();
        const result = data.filter((i) => i.name === value);
        if (!type) {

            alert('Выберите категорию для удаления')
            return
        }
        if (imageUrl < 1 || !imageUrl) {
            alert("Выберите фотографию");
            return;
        }
        if (value < 1) {
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
                axios.put(`/type/update/${type}`, formData);
                alert("Тип изменен");
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
            <h2>Изменить категории товара</h2>
            <form action="" className={styles.form} onSubmit={addType}>
                <label htmlFor="types">Выберите категорию товара для изменения :</label>
                <select id="types" name="types" select={type} onChange={handleChange}>
                    <>
                        {" "}
                        <option>Выберите категорию</option>
                    </>
                    {data.map((el) => (
                        <option value={el.id} key={el.id}>
                            {el.name}
                        </option>
                    ))}
                </select>
                <label htmlFor="name">Введите название товара</label>

                <input
                    type="text"
                    id="name"
                    name="name"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Погрузчик"
                />
                <input ref={inputFileRef} onChange={handleChangeFile} type="file" />
                <button type="submit">Изменить</button>
            </form>
        </div>
    );
};

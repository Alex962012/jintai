import styles from "./UpdateProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { fetchTypes } from "../../redux/slices/types";
import { fetchProducts } from "../../redux/slices/products";
import axios from "../../axios";
import { Link } from "react-router-dom";
export const UpdateProduct = () => {
    const [name, setName] = useState(null);
    const { products } = useSelector((state) => state.products);
    const { types } = useSelector((state) => state.types);
    const [typeId, setTypeId] = useState(null);
    const dispatch = useDispatch();
    const [info, setInfo] = useState([]);
    const [title, setTitle] = useState("");
    const inputFileRef = useRef(null);
    const [imageUrl, setImageUrl] = useState("");
    useEffect(() => {
        dispatch(fetchTypes());
        dispatch(fetchProducts());
    }, [dispatch]);
    const data = products.items;
    const typesData = types.items
    const productsData = products.items;
    const handleChangeType = (event) => {
        setTypeId(event.target.value);
    };
    const handleChangeName = (event) => {
        setName(event.target.value);
        console.log(name)
    };
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

    const addInfo = (e) => {
        e.preventDefault();
        setInfo([...info, { title: "", description: "", number: Date.now() }]);
    };

    const removeInfo = (e, number) => {
        e.preventDefault();
        setInfo(info.filter((i) => i.number !== number));
    };

    const changeInfo = (key, value, number) => {
        setInfo(
            info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
        );
    };

    const addProduct = async (e) => {
        e.preventDefault();

        const result = productsData.filter((i) => i.title === title);
        if (!typeId) {
            alert("Выберите категорию");
            return;
        }
        if (imageUrl < 1 || !imageUrl) {
            alert("Выберите фотографию");
            return;
        }
        if (title < 1 || !title) {
            alert("Введите название");
            return;
        }

        if (result.length > 0) {
            alert("Такое название уже есть");
            return;
        }
        if (isValidFileUploaded(imageUrl)) {
            const formData = new FormData();

            formData.append("title", title);
            formData.append("typeId", typeId);
            formData.append("imageUrl", imageUrl);
            formData.append("info", JSON.stringify(info));

            try {
                const { data } = await axios.put(`/product/update/${name}`, formData);
                console.log(data);
                alert("Товар изменен");
                setTitle("");
            } catch (response) {
                console.log(response);
            }
        } else {
            console.log("ddd");
        }
    };



    return (
        <div className={styles.container}>
            <div className={styles.containerTitle}>
                <h2>Изменение товара</h2></div>
            <div>
                <Link to='/admin' className={styles.back}>Назад</Link>
            </div>
            <form action="" className={styles.form}>
                <label htmlFor="name">Выберите название товара для изменения :</label>
                <select id="names" name="names" select={name} onChange={handleChangeName}>
                    <>
                        {" "}
                        <option>Выберите название</option>
                    </>
                    {data.map((el) => (
                        <option value={el.id} key={el.id}>
                            {el.title}
                        </option>
                    ))}
                </select>

                <label htmlFor="title" className={styles.title}>Введите название товара</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Howo"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="types" className={styles.types}>Выберите категорию товара:</label>
                <select
                    id="types"
                    name="types"
                    select={typeId}
                    onChange={handleChangeType}
                >
                    <>
                        {" "}
                        <option>Выберите категорию</option>
                    </>
                    {typesData.map((el) => (
                        <option value={el.id} key={el.id}>
                            {el.name}
                        </option>
                    ))}
                </select>

                <input ref={inputFileRef} onChange={handleChangeFile} type="file" />
                <div >
                    <button onClick={addInfo} className={styles.addButton}>Добавить новое свойство</button>
                    {info.map((i) => (
                        <div key={i.number} className={styles.infoContainer}>
                            <label htmlFor="name" className={styles.name}>Введите название свойства</label>
                            <input
                                value={i.title}
                                type="text"
                                id="name"
                                name="name"
                                onChange={(e) => changeInfo("title", e.target.value, i.number)}
                                placeholder="Модель двигателя"
                            />
                            <label htmlFor="name" className={styles.name}>Введите описание свойства</label>
                            <input
                                value={i.description}
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Cummins"
                                onChange={(e) =>
                                    changeInfo("description", e.target.value, i.number)
                                }
                            />
                            <div className={styles.deleteButton}>
                                <button onClick={(e) => removeInfo(e, i.number)}>
                                    Удалить
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div>{/* <button>Добавить изображение</button> */}</div>
                <button onClick={addProduct}>Изменить товар </button>
            </form>
        </div>
    );
};

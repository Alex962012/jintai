import styles from "./CreateProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { fetchTypes } from "../../redux/slices/types";
import { fetchProducts } from "../../redux/slices/products";
import axios from "../../axios";
export const CreateProduct = () => {
    const { types } = useSelector((state) => state.types);
    const { products } = useSelector((state) => state.products);
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
    const data = types.items;
    const productsData = products.items;
    const handleChangeType = (event) => {
        setTypeId(event.target.value);
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
                const { data } = await axios.post("/product/add", formData);
                console.log(data);
                alert("Товар создан");
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
            <h2>Создание товара</h2>
            <form action="" className={styles.form}>
                <label htmlFor="title">Введите название товара</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Howo"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="types">Выберите категорию товара:</label>
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
                    {data.map((el) => (
                        <option value={el.id} key={el.id}>
                            {el.name}
                        </option>
                    ))}
                </select>

                <input ref={inputFileRef} onChange={handleChangeFile} type="file" />
                <div>
                    <button onClick={addInfo}>Добавить новое свойство</button>
                    {info.map((i) => (
                        <div key={i.number}>
                            <label htmlFor="name">Введите название свойства</label>
                            <input
                                value={i.title}
                                type="text"
                                id="name"
                                name="name"
                                onChange={(e) => changeInfo("title", e.target.value, i.number)}
                                placeholder="Модель двигателя"
                            />
                            <label htmlFor="name">Введите описание свойства</label>
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
                            <div>
                                <button onClick={(e) => removeInfo(e, i.number)}>
                                    Удалить
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div>{/* <button>Добавить изображение</button> */}</div>
                <button onClick={addProduct}>Создать </button>
            </form>
        </div>
    );
};

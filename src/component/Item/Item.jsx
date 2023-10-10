import { useState } from "react";
import "./Item.css";
import { Modal } from "../ModalWindow/ModalWindow";

export const Item = () => {
    const [active, setActive] = useState(false);

    const onClickModal = () => {
        setActive(true);
    };
    return (
        <div className="order-item">
            <img
                // src={imageUrl}
                // alt={title}
                className="item-picture"
                onClick={() => onClickModal()}
            ></img>
            <div className="item-title-container">
                <div className="item-name" onClick={() => onClickModal()}>
                    {title}
                </div>
            </div>


        </div>
    );
};

import { useState } from "react";
import styles from './Feedback.module.css'
import emailjs from "@emailjs/browser";
export const Feedback = ({ active,
    setActive }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const sendEmail = (e) => {
        e.preventDefault();
        if (name === '') {
            alert("Заполните имя")
            return
        }
        if (email === '') {
            alert("Заполните номер")
            return
        }
        else {
            emailjs.sendForm(
                "service_lrr2c5z",
                "template_kyam8md",
                e.target,
                "xduDM1b0TgoASuAHP"
            )
                .then(
                    (result) => {
                        alert("Сообщение отправлено");
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
            setName("");
            setEmail("");
        }

    };

    return (
        <div className={active ? styles.modalActive : styles.modal}
            onClick={() => setActive(false)}>
            <div className={styles.feedbackContainer} id="feedback" onClick={(e) => e.stopPropagation()}>
                <div className={styles.closeModalContainer}>
                    <div className={styles.closeModal} onClick={() => setActive(false)}>
                        <svg
                            className="close-modal-icon"
                            data-name="Layer 1"
                            height="200"
                            id="Layer_1"
                            viewBox="0 0 200 200"
                            width="200"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title />
                            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                        </svg>
                    </div>
                </div>
                <div className={styles.formContainer}>
                    <div className={styles.formTitleContainer}>
                        <h3 className={styles.formTitle}>
                            Закажите обратный звонок
                        </h3>
                        <div className={styles.subtitle}>
                            Заполните форму и наш специалист перезвонит вам.
                        </div>
                    </div>
                    <form action="" onSubmit={sendEmail} className={styles.feedbackForm}>
                        <input
                            type="text"
                            className={styles.formInput}
                            placeholder="Имя"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            name="user_name"
                        />
                        <input
                            type="number"
                            className={styles.formInput}
                            placeholder="Телефон"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="user_email"
                        />

                        <button className={styles.formButton} type="submit">
                            Отправить сообщение
                        </button>
                    </form>
                </div>
                <div className="image-container"></div>
            </div>
        </div>
    );
};

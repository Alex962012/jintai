import styles from "./Company.module.css";
import { useState } from "react";
import { Feedback } from "../../component/Feedback/Feedback";
import { Whatsapp } from "../../component/whatsaap/Whatsapp";
export const Company = () => {
    const [active, setActive] = useState(false);
    const onClickModal = () => {
        setActive(true);
    };
    return (
        <div className={styles.companyContainer}>
            <div>
                <div className={styles.title}>
                    <div className={styles.titleContainer}><h2>Контакты компании</h2></div>
                </div>
                <div className={styles.content}>
                    <div className={styles.contactInfo}>
                        <div className={styles.price} onClick={() => onClickModal()}>
                            ЗАКАЗАТЬ ЗВОНОК
                        </div>
                        <div className={styles.info}>
                            <div className={styles.icon}>
                                <img src="../../assets/icon-phone.png" alt="" className={styles.img} />
                            </div>
                            <div className={styles.valueContainer}>
                                <div className={styles.name}>ЗВОНОК ПО РФ</div>
                                <div className={styles.value}> 89140647833</div>
                            </div>
                        </div>

                        <div className={styles.info}>
                            <div className={styles.icon}>
                                <img src="../../assets/icon-place.png" alt="" className={styles.img} />
                            </div>
                            <div className={styles.valueContainer}>
                                <div className={styles.name}>АДРЕС КОМПАНИИ</div>
                                <div className={styles.value}>
                                    г.Благовещенск с.Чигири ул.Центральная литер 8/1
                                </div>
                            </div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.svg}>
                                <svg
                                    id="Layer_1"
                                    version="1.1"
                                    viewBox="0 0 100.354 100.352"
                                    space="preserve"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xlink="http://www.w3.org/1999/xlink"
                                >
                                    <path d="M93.09,76.224c0.047-0.145,0.079-0.298,0.079-0.459V22.638c0-0.162-0.032-0.316-0.08-0.462  c-0.007-0.02-0.011-0.04-0.019-0.06c-0.064-0.171-0.158-0.325-0.276-0.46c-0.008-0.009-0.009-0.02-0.017-0.029  c-0.005-0.005-0.011-0.007-0.016-0.012c-0.126-0.134-0.275-0.242-0.442-0.323c-0.013-0.006-0.023-0.014-0.036-0.02  c-0.158-0.071-0.33-0.111-0.511-0.123c-0.018-0.001-0.035-0.005-0.053-0.005c-0.017-0.001-0.032-0.005-0.049-0.005H8.465  c-0.017,0-0.033,0.004-0.05,0.005c-0.016,0.001-0.032,0.004-0.048,0.005c-0.183,0.012-0.358,0.053-0.518,0.125  c-0.01,0.004-0.018,0.011-0.028,0.015c-0.17,0.081-0.321,0.191-0.448,0.327c-0.005,0.005-0.011,0.006-0.016,0.011  c-0.008,0.008-0.009,0.019-0.017,0.028c-0.118,0.135-0.213,0.29-0.277,0.461c-0.008,0.02-0.012,0.04-0.019,0.061  c-0.048,0.146-0.08,0.3-0.08,0.462v53.128c0,0.164,0.033,0.32,0.082,0.468c0.007,0.02,0.011,0.039,0.018,0.059  c0.065,0.172,0.161,0.327,0.28,0.462c0.007,0.008,0.009,0.018,0.016,0.026c0.006,0.007,0.014,0.011,0.021,0.018  c0.049,0.051,0.103,0.096,0.159,0.14c0.025,0.019,0.047,0.042,0.073,0.06c0.066,0.046,0.137,0.083,0.21,0.117  c0.018,0.008,0.034,0.021,0.052,0.028c0.181,0.077,0.38,0.121,0.589,0.121h83.204c0.209,0,0.408-0.043,0.589-0.121  c0.028-0.012,0.054-0.03,0.081-0.044c0.062-0.031,0.124-0.063,0.181-0.102c0.03-0.021,0.057-0.048,0.086-0.071  c0.051-0.041,0.101-0.082,0.145-0.129c0.008-0.008,0.017-0.014,0.025-0.022c0.008-0.009,0.01-0.021,0.018-0.03  c0.117-0.134,0.211-0.288,0.275-0.458C93.078,76.267,93.083,76.246,93.09,76.224z M9.965,26.04l25.247,23.061L9.965,72.346V26.04z   M61.711,47.971c-0.104,0.068-0.214,0.125-0.301,0.221c-0.033,0.036-0.044,0.083-0.073,0.121l-11.27,10.294L12.331,24.138h75.472  L61.711,47.971z M37.436,51.132l11.619,10.613c0.287,0.262,0.649,0.393,1.012,0.393s0.725-0.131,1.011-0.393l11.475-10.481  l25.243,23.002H12.309L37.436,51.132z M64.778,49.232L90.169,26.04v46.33L64.778,49.232z" />
                                </svg>
                            </div>
                            <div className={styles.valueContainer}>
                                <div className={styles.name}>ЭЛЕКТРОННАЯ ПОЧТА</div>
                                <div className={styles.value}>tar28@bk.ru</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.map}>
                        <iframe
                            title="map"
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa9e9b52653937753cb258bfc14ca2906fef5d814be47d6cc1375e4c2d85abf4f&amp;source=constructor"
                            frameBorder="0"
                        ></iframe>
                    </div>
                </div>
            </div>
            <Feedback active={active}
                setActive={setActive} />
            <Whatsapp></Whatsapp>
        </div>
    );
};

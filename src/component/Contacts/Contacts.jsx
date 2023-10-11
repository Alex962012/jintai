import styles from "./Contacts.module.css";

export const Contacts = () => {

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.icon}></div>
                <div className={styles.txt}>89140647833</div>
            </div>
            <div className={styles.item}>
                <div className={styles.icon}></div>
                <div className={styles.txt}>г.Благовещенск с.Чигири ул.Центральная литер 8/1</div>
            </div>
            <div className={styles.item}>
                <div className={styles.icon}></div>
                <div className={styles.txt}>Ежедневно с 08:00 до 18:00</div>
            </div>
        </div>
    );
};
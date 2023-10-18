import styles from "./Footer.module.css";
export const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className={styles.footerContent}>
                    <div className={styles.footerLeft}>Все права защищены!</div>
                    <div className={styles.footerRight}>
                        Copyright © 2023 JINTAI.RU Спецтехника из Китая
                    </div>
                </div>
            </div>
        </footer>
    );
};

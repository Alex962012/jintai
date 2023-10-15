import styles from './Footer.module.css';
export const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className={styles.footerContent}>
                    <div className="footer-left">
                        Все права защищены!
                    </div>
                    <div className="footer-right">
                        Copyright © 2023 JINTAI.RU Спецтехника из Китая
                    </div>
                </div>
            </div>
        </footer>
    );
};

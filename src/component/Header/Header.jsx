import { Link } from "react-router-dom";
import { useState } from "react";
import styles from './Header.module.css';
export const Header = () => {
    const [openBurger, setOpenBurger] = useState(false);
    return (
        <header>
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <Link to="/" className={styles.logoContainer}>
                        <div className={styles.logo}></div>
                    </Link>
                    <nav className={openBurger ? `${styles.headerNav} ${styles.active}` : `${styles.headerNav}`}>
                        <Link
                            to="/"
                            onClick={() => setOpenBurger(!openBurger)}
                            className={styles.navItem}
                        >
                            Главная
                        </Link>
                        <Link
                            to="/catalog"
                            onClick={() => setOpenBurger(!openBurger)}
                            className={styles.navItem}
                        >
                            Каталог
                        </Link>
                        <Link
                            to="/about"
                            onClick={() => setOpenBurger(!openBurger)}
                            className={styles.navItem}
                        >
                            О бренде
                        </Link>
                        <Link
                            to="/feedback"
                            onClick={() => setOpenBurger(!openBurger)}
                            className={styles.navItem}
                        >
                            Обратная связь
                        </Link>
                    </nav>
                    <div
                        className={openBurger ? `${styles.menuBtn} ${styles.active}` : `${styles.menuBtn}`}
                        onClick={() => setOpenBurger(!openBurger)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
};

import styles from './NotFound.module.css'
export const NotFound = () => {
    return (
        <div className={styles.container}>
            <h1>Страница не найдена</h1>
            <div>
                Эта страница, которую вы ищете, могла быть удалена, ее название было
                изменено или она временно недоступна.
            </div>
        </div>
    );
};

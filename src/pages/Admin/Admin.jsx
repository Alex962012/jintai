import { useAuth } from "../../hook/useAuth"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import styles from './Admin.module.css'
export const Admin = () => {
    const { signout } = useAuth()
    const navigate = useNavigate()
    return (
        <div className={styles.adminPanel}>
            <div className={styles.buttonPanel}>
                <Link to='/createType'>
                    <div className={styles.button}>
                        Добавить категорию товара
                    </div>
                </Link>
                <Link to='/updateType'>
                    <div className={styles.button}>
                        Изменить категорию товара
                    </div>
                </Link>
                <Link to='/deleteType'>
                    <div className={styles.button}>
                        Удалить категорию товара
                    </div>
                </Link>

            </div>
            <div className={styles.buttonPanel}>
                <Link to='/createProduct'>
                    <div className={styles.button}>
                        Добавить товар
                    </div>
                </Link>
                <Link to='/updateProduct'>
                    <div className={styles.button}>
                        Изменить товар
                    </div>
                </Link>
                <Link to='/deleteProduct'>
                    <div className={styles.button}>
                        Удалить товар
                    </div>
                </Link>
            </div>
            <button onClick={() => signout(() => navigate('/', { replace: true }))}>Выход</button>

        </div>
    )
}
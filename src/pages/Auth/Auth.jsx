import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../../hook/useAuth"
import styles from './Auth.module.css'
export const Auth = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { signin } = useAuth()

    const fromPage = location.state?.from?.pathname || '/'

    const handlerSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const user = form.username
        signin(user, () => navigate(fromPage))
    }

    return (
        <div className={styles.authContainer}>
            <h1>Вход в аккаунт</h1>
            <form onSubmit={handlerSubmit}>
                <label >
                    <input name="username" />
                </label>
                <button type="submit">Вход</button>
            </form>
        </div>
    )
}
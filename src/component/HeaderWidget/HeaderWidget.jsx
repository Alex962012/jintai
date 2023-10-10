import styles from './HeaderWidget.module.css'
export const HeaderWidget = () => {
    return (
        <div className={styles.headerWidget}>
            <div className="widget-icon-box">
                <div className="icon-box">
                    <i className="headphones"></i>
                    <p>Бесплатнй звонок</p>
                    <span>89140647833</span>
                </div>
            </div>
            <div className="widget-icon-box">
                <div className="icon-box">
                    <i className="email"></i>
                    <p>Email</p>
                    <span>tar28@bk.ru</span>
                </div>
            </div>
            {/* <a target="">Заказать звонок</a> */}
        </div>
    )
}
import styles from "./ItemDetail.module.css";
import { useLocation } from 'react-router-dom'
export const ItemDetail = () => {
    const location = useLocation()
    const { item } = location.state
    return (
        <div className={styles.itemDetail}>
            <h2 className={styles.title}>{item.title}</h2>
            <div className={styles.row}>
                <div className={styles.photogallery}></div>
                <div className={styles.specificationsBlock}>
                    <div className={styles.specificationsTitle}>Технические характеристики</div>
                    <div className={styles.specifications}>
                        <div>
                            <div>Модель двигателя: {item.modelEngine}</div>
                            <div>Мощность двигателя (кВт/л.с.) : {item.powerEngine}</div>
                            <div>Модель КПП: {item.gearboxModel}</div>
                            <div>Объем двигателя: {item.capacityEngine}</div>
                            <div>Крутящий момент (Нм)/об.мин : {item.torque} </div>
                            <div>Класс выхлопа: {item.emissionClass}</div>
                            <div>Колесная база(мм): {item.wheelbase}</div>
                            <div>Макс. нагрузка на переднюю ось,кг: {item.maxLoadFront}</div>
                            <div>Макс. Нагрузка на заднюю ось, кг: {item.maxLoadRear}</div>
                            <div>Снаряженная масса, кг: {item.curbWeight}</div>
                            <div>Полная масса ТС(кг): {item.grossVehicleWeight}</div>
                            <div>Тормозная система: {item.brakingSystem}</div>
                            <div>Подвеска передняя: {item.frontSuspension}</div>
                            <div>Подвеска задняя:{item.rearSuspension} </div>
                            <div>Седло: {item.saddle}</div>
                            <div>Ретардер: {item.retarder}</div>
                            <div>Круиз-контроль: {item.cruiseControl}</div>
                            <div>Кондиционер: {item.airConditioner}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

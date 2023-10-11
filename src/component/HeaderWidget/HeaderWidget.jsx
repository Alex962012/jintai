import styles from "./HeaderWidget.module.css";
export const HeaderWidget = () => {
    return (
        <div className={styles.headerWidget}>
            <div className={styles.widgetIconBox}>
                <div className={styles.iconBox}>
                    <i className={styles.headphonesBox}>
                        <svg
                            className={styles.headphones}
                            width="8"
                            height="14"
                            viewBox="0 0 8 14"
                            fill="#FFF"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.34544 9.19035C4.3752 9.1854 4.40497 9.18018 4.43443 9.17502C4.57281 9.15079 4.70419 9.12778 4.79424 9.13924C4.98831 9.16393 5.27614 9.5452 5.52934 10.0011C5.80442 10.4963 6.00721 10.9435 5.99815 11.2339C5.9891 11.5243 5.52934 11.9971 5.27589 11.9988C5.02244 12.0005 4.84757 11.9988 4.38109 11.9511C3.9146 11.9034 3.24475 11.4539 3.05287 11.15C3.01142 11.0843 2.9725 11.0222 2.93476 10.9589C2.79777 10.7292 2.67639 10.4843 2.50683 10.0011C2.38177 9.64464 2.27993 9.27989 2.2013 8.9099C2.14516 8.64574 2.10086 8.3789 2.06839 8.11052C2.02384 7.74223 2.00157 7.37103 2.00158 6.99983C2.00159 6.62863 2.02389 6.25743 2.06846 5.88914C2.09963 5.63166 2.14168 5.37559 2.19462 5.12194C2.27415 4.74093 2.37824 4.36536 2.50691 3.99859C2.67086 3.53124 2.78974 3.27887 2.92127 3.05774C2.96323 2.9872 3.00647 2.91984 3.05287 2.8497C3.24475 2.55965 3.88724 2.09621 4.38109 2.04852C4.8225 2.0059 5.01031 2.00383 5.20555 2.00168C5.22875 2.00142 5.25205 2.00116 5.27589 2.00084C5.50043 1.99777 5.99548 2.46384 5.99815 2.76576C6.00082 3.06768 5.80442 3.50335 5.52934 3.99859C5.27614 4.45445 5.03412 4.83208 4.79424 4.86041C4.67301 4.87473 4.50319 4.84587 4.34543 4.81906C4.34446 4.8189 4.34349 4.81873 4.34253 4.81857C4.18927 4.79252 4.04775 4.76868 3.97373 4.78862C3.82312 4.82918 3.54967 4.93563 3.49577 5.30943C3.4932 5.32726 3.49073 5.34436 3.48836 5.36079C3.44104 5.68869 3.43248 5.74799 3.41183 5.99941C3.38433 6.33416 3.37058 6.66702 3.37058 6.99987C3.37058 7.3327 3.38433 7.66553 3.41183 8.00024L3.4131 8.0158C3.43387 8.26866 3.44294 8.37914 3.49577 8.69023C3.54967 9.00762 3.74545 9.17549 3.97986 9.2127C4.08232 9.22896 4.21374 9.21225 4.34544 9.19035ZM5.37457 6.77929C6.14981 6.56283 6.59901 5.993 6.72764 5.82983L6.72889 5.82825C6.95961 5.53558 7.15007 5.20246 7.27928 4.96984C7.43376 4.69172 7.59825 4.374 7.72726 4.05043C7.84309 3.75989 8.00443 3.28778 7.99965 2.74807C7.99459 2.17599 7.77645 1.73588 7.64424 1.50955C7.49263 1.24999 7.31188 1.03239 7.1437 0.862322C6.97566 0.692392 6.7691 0.518305 6.5318 0.372388C6.36872 0.272112 5.89055 -0.00858388 5.24849 0.000201648C5.22601 0.000509335 5.20348 0.000767052 5.18064 0.00102835C4.96138 0.00353635 4.71253 0.00638317 4.18864 0.056969C3.48664 0.124753 2.88759 0.440169 2.52245 0.674477C2.16526 0.903692 1.69714 1.27167 1.38331 1.74608C1.09444 2.18276 0.885227 2.57501 0.618097 3.33648C0.204199 4.51633 4.27173e-05 5.76124 6.70177e-09 6.99976C-4.27039e-05 8.23838 0.204061 9.48338 0.618057 10.6633C0.893193 11.4474 1.10375 11.8115 1.3601 12.2177C1.69309 12.7452 2.20651 13.1264 2.55172 13.3424C2.91355 13.5689 3.50343 13.8727 4.17747 13.9416C4.7199 13.997 4.96732 14.0017 5.28924 13.9996C5.89878 13.9955 6.3547 13.7409 6.55244 13.6179C6.80037 13.4635 7.01009 13.2804 7.17649 13.1062C7.34392 12.9308 7.51551 12.7142 7.65817 12.4628C7.78234 12.2439 7.98212 11.8299 7.99876 11.2962C8.01649 10.7279 7.84015 10.23 7.72897 9.95186C7.59938 9.62767 7.4336 9.30764 7.27928 9.02981C7.11975 8.74261 6.91803 8.42008 6.68541 8.1374C6.57069 7.99798 6.40884 7.81945 6.202 7.65484C6.06387 7.54492 5.77994 7.33821 5.3746 7.22192C5.37135 7.07433 5.37134 6.92688 5.37457 6.77929Z"
                                fill="#888888"
                            ></path>
                        </svg>
                    </i>
                    <p>Бесплатный звонок</p>
                </div>
                <span>89140647833</span>
            </div>
            <div className={styles.widgetIconBox}>
                <div className={styles.iconBox}>
                    <i className={styles.email}>
                        <svg
                            width="19"
                            height="14"
                            viewBox="0 0 19 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 0C1.34315 0 0 1.34315 0 3V11C0 12.6569 1.34315 14 3 14H16C17.6569 14 19 12.6569 19 11V3C19 1.34315 17.6569 0 16 0H3ZM2 3.28062V10.5858L4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289C6.09763 8.68342 6.09763 9.31658 5.70711 9.70711L3.41421 12H15.5858L13.2929 9.70711C12.9024 9.31658 12.9024 8.68342 13.2929 8.29289C13.6834 7.90237 14.3166 7.90237 14.7071 8.29289L17 10.5858V3.28062L10.7494 8.28111C10.019 8.86546 8.98104 8.86546 8.25061 8.28111L2 3.28062ZM15.3992 2H3.60078L9.5 6.71937L15.3992 2Z"
                                fill="#999999"
                            ></path>
                        </svg>
                    </i>
                    <p>Email</p>
                </div>
                <span>tar28@bk.ru</span>
            </div>
            <div className={styles.widgetIconBox}>
                <a target="">Заказать звонок</a>
            </div>
        </div>
    );
};

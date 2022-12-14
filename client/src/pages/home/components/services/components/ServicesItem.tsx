import React from "react";

import styles from "../styles.module.scss";

export const ServicesItem = ({ item }: any) => {
  return (
    <div className={styles.servicesItem}>
      <h3 className={styles.servicesItem__title}>{item.title}</h3>
      <span className={styles.servicesItem__description}>
        {item.description}
      </span>
      <span className={styles.servicesItem__registered}>{item.button}</span>
      <div className={styles.servicesItem__img}>{item.img}</div>
      <span className={styles.circle} />
    </div>
  );
};

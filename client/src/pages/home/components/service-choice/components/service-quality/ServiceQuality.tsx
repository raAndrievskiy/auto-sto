import React from "react";

import styles from "../../styles.module.scss";

export const ServiceQuality = ({ item }: any) => {
  return (
    <div className={styles.serviceQualityItem}>
      <div className={styles.serviceQuality__img}>{item.icon}</div>
      <span className={styles.serviceQuality__title}>{item.title}</span>
      <span className={styles.serviceQuality__description}>
        {item.description}
      </span>
    </div>
  );
};

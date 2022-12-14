import React from "react";

import styles from "../../styles.module.scss";

export const ServiceChoiceItem = ({ item }: any) => {
  return (
    <div className={styles.serviceChoiceItem}>
      <div className={styles.serviceChoiceItem__img}>{item.icon}</div>
      <span className={styles.serviceChoiceItem__title}>{item.title}</span>
      <span className={styles.serviceChoiceItem__description}>
        {item.description}
      </span>
    </div>
  );
};

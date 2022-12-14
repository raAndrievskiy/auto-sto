import React from "react";

import styles from "../styles.module.scss";

export const ActionsItem = ({ item }: any) => {
  return (
    <div className={styles.actionsItem}>
      <h1 className={styles.actionsItem__title}>{item.title}</h1>
      <span className={styles.actionsItem__description}>
        {item.description}
      </span>
    </div>
  );
};

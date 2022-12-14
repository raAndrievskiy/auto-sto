import React from "react";

import styles from "../../styles.module.scss";

export const MakeItem = ({ item }: any) => {
  return (
    <div className={styles.makeItem}>
      {item.icon}
      <h1 className={styles.makeItem__title}>{item.title}</h1>
    </div>
  );
};

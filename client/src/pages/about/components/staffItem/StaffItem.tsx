import React from "react";

import styles from "../../styles.module.scss";

export const StaffItem = ({ item }: any) => {
  return (
    <div className={styles.staffItem}>
      {item.img}
      <span className={styles.staffName}>{item.name}</span>
      <span className={styles.staffDescription}>{item.description}</span>
      <div className={styles.staffContacts}>
        <span>{item.email}</span>
        <span>{item.contacts}</span>
      </div>
    </div>
  );
};
